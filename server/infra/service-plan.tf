resource "azurerm_service_plan" "vite_fs_appserviceplan" {
  name                = local.app_service_plan_name
  location            = azurerm_resource_group.vite_fs_rg.location
  resource_group_name = azurerm_resource_group.vite_fs_rg.name
  os_type             = "Linux"
  sku_name            = "B1"
}