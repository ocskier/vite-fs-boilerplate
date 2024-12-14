resource "azurerm_app_service_source_control" "sourcecontrol" {
  app_id                 = azurerm_linux_web_app.vite_fs_boilerplate.id
  repo_url               = "https://github.com/ocskier/vite-fs-boilerplate"
  branch                 = "main"
  use_manual_integration = true

  depends_on = [azurerm_linux_web_app.vite_fs_boilerplate]

  # github_action_configuration {
  #   generate_workflow_file = true
  #   code_configuration {
  #     runtime_stack = "node"
  #     runtime_version = "18-lts"
  #   }
  # }

  #   container_configuration {
  #     image_name     = "${local.project_name}-build"
  #     repository_url = "ocskier/vite-fs-boilerplate"
  #     branch         = "main"
  #     git_token      = var.git_token
  #   }
  # }
}