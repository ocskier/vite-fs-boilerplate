resource "azurerm_resource_group" "vite_fs_rg" {
  name     = local.rg_name
  location = var.LOCATION

  tags = {
    environment = var.ENV
    test        = true
  }
}