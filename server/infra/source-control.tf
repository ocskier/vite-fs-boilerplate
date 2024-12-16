resource "azurerm_app_service_source_control" "sourcecontrol" {
  app_id                 = azurerm_linux_web_app.vite_fs_boilerplate.id
  repo_url               = "https://github.com/ocskier/vite-fs-boilerplate"
  branch                 = "main"
  use_manual_integration = true

  depends_on = [azurerm_linux_web_app.vite_fs_boilerplate]
}