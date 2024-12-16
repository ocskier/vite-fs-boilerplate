resource "azurerm_cdn_frontdoor_profile" "vite_fs_fd" {
  name                = local.afd_name
  resource_group_name = local.rg_name
  sku_name            = "Premium_AzureFrontDoor"
}

resource "azurerm_cdn_frontdoor_endpoint" "vite_fs_endpoint" {
  name                     = local.afd_endpoint_name
  cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.vite_fs_fd.id
}

resource "azurerm_cdn_frontdoor_origin_group" "vite_fs_app_orig_group" {
  name                     = local.afd_app_orig_group_name
  cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.vite_fs_fd.id
  session_affinity_enabled = true

  load_balancing {
    sample_size                 = 4
    successful_samples_required = 3
  }

  health_probe {
    path                = "/api/health"
    request_type        = "HEAD"
    protocol            = "Https"
    interval_in_seconds = 100
  }
}

resource "azurerm_cdn_frontdoor_origin" "vite_fs_app_service_origin" {
  name                           = local.afd_app_orig_name
  cdn_frontdoor_origin_group_id  = azurerm_cdn_frontdoor_origin_group.vite_fs_app_orig_group.id
  enabled                        = true
  host_name                      = azurerm_linux_web_app.vite_fs_boilerplate.default_hostname
  http_port                      = 80
  https_port                     = 443
  origin_host_header             = azurerm_linux_web_app.vite_fs_boilerplate.default_hostname
  priority                       = 1
  weight                         = 1000
  certificate_name_check_enabled = true

  # Private endpoint connections must be manually approved in web app
  private_link {
    request_message        = "private_link_orig_cdn_fd-${local.afd_app_orig_name}"
    target_type            = "sites"
    location               = azurerm_linux_web_app.vite_fs_boilerplate.location
    private_link_target_id = azurerm_linux_web_app.vite_fs_boilerplate.id
  }
}

resource "azurerm_cdn_frontdoor_rule_set" "vite_fs_routing_rules" {
  name                     = "defaultroutingrules"
  cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.vite_fs_fd.id
}

resource "azurerm_cdn_frontdoor_route" "vite_fs_swagger_route" {
  name                          = local.afd_swagger_route_name
  cdn_frontdoor_endpoint_id     = azurerm_cdn_frontdoor_endpoint.vite_fs_endpoint.id
  cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.vite_fs_app_orig_group.id
  cdn_frontdoor_origin_ids      = [azurerm_cdn_frontdoor_origin.vite_fs_app_service_origin.id]
  cdn_frontdoor_rule_set_ids    = [azurerm_cdn_frontdoor_rule_set.vite_fs_routing_rules.id]

  supported_protocols    = ["Https"]
  patterns_to_match      = ["/swagger/*"]
  forwarding_protocol    = "HttpsOnly"
  link_to_default_domain = true
  https_redirect_enabled = false
}

resource "azurerm_cdn_frontdoor_route" "vite_fs_graphql_route" {
  name                          = local.afd_graphql_route_name
  cdn_frontdoor_endpoint_id     = azurerm_cdn_frontdoor_endpoint.vite_fs_endpoint.id
  cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.vite_fs_app_orig_group.id
  cdn_frontdoor_origin_ids      = [azurerm_cdn_frontdoor_origin.vite_fs_app_service_origin.id]
  cdn_frontdoor_rule_set_ids    = [azurerm_cdn_frontdoor_rule_set.vite_fs_routing_rules.id]

  supported_protocols    = ["Https"]
  patterns_to_match      = ["/graphql/*"]
  forwarding_protocol    = "HttpsOnly"
  link_to_default_domain = true
  https_redirect_enabled = false
}

resource "azurerm_cdn_frontdoor_route" "vite_fs_app_route" {
  name                          = local.afd_app_route_name
  cdn_frontdoor_endpoint_id     = azurerm_cdn_frontdoor_endpoint.vite_fs_endpoint.id
  cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.vite_fs_app_orig_group.id
  cdn_frontdoor_origin_ids      = [azurerm_cdn_frontdoor_origin.vite_fs_app_service_origin.id]
  cdn_frontdoor_rule_set_ids    = [azurerm_cdn_frontdoor_rule_set.vite_fs_routing_rules.id]

  supported_protocols    = ["Http", "Https"]
  patterns_to_match      = ["/*"]
  forwarding_protocol    = "MatchRequest"
  link_to_default_domain = true
  https_redirect_enabled = true
}
