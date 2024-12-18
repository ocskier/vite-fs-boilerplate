resource "azurerm_linux_web_app" "vite_fs_boilerplate" {
  name                          = "${local.project_name}-app"
  location                      = azurerm_resource_group.vite_fs_rg.location
  resource_group_name           = azurerm_resource_group.vite_fs_rg.name
  service_plan_id               = azurerm_service_plan.vite_fs_appserviceplan.id
  public_network_access_enabled = false
  https_only                    = true

  site_config {
    app_command_line                  = "npm run install && npm run server"
    health_check_path                 = "/api/health"
    health_check_eviction_time_in_min = 5
    minimum_tls_version               = "1.2"
    ip_restriction_default_action     = "Deny"

    application_stack {
      node_version = "18-lts"
    }

    cors {
      allowed_origins     = ["https://localhost:3000"]
      support_credentials = true
    }

    dynamic "ip_restriction" {
      for_each = var.allowed_ips
      content {
        name       = "AllowLocalhost"
        action     = "Allow"
        ip_address = ip_restriction.value
      }
    }
  }
}
