resource "azurerm_linux_web_app" "vite_fs_boilerplate" {
  name                = "${local.project_name}-app"
  location            = azurerm_resource_group.vite_fs_rg.location
  resource_group_name = azurerm_resource_group.vite_fs_rg.name
  service_plan_id     = azurerm_service_plan.vite_fs_appserviceplan.id
  https_only          = true
  site_config {
    minimum_tls_version = "1.2"
  }
}