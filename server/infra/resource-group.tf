resource "azurerm_resource_group" "vite_fs_rg" {
  name     = local.rg_name
  location = var.location

  tags = {
    environment = var.env
    test = true
  }
}