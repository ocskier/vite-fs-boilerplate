resource "azurerm_storage_account" "vite_fs_storageacct" {
  name                     = local.storage_acct
  resource_group_name      = azurerm_resource_group.vite_fs_rg.name
  location                 = azurerm_resource_group.vite_fs_rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  tags = {
    environment = var.ENV
  }
}