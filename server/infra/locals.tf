locals {
  project_name            = "vite-fs-boilerplate-${var.ENV}"
  project_description     = "A Vite boilerplate with file system routing"
  project_author          = var.AUTHOR
  project_author_email    = var.AUTHOR_EMAIL
  project_author_github   = var.AUTHOR_GITHUB
  rg_name                 = "vite-fs-rg-${var.ENV}"
  storage_acct            = "vitefsstorage${var.ENV}"
  app_service_plan_name   = "vite-fs-asp-${var.ENV}"
  afd_name                = "vite-fs-afd-${var.ENV}"
  afd_endpoint_name       = "vite-fs-afde-${var.ENV}"
  afd_app_orig_group_name = "vite-fs-app-orig-group-${var.ENV}"
  afd_app_orig_name       = "vite-fs-app-orig-${var.ENV}"
  afd_swagger_route_name  = "vite-fs-swagger-route-${var.ENV}"
  afd_graphql_route_name  = "vite-fs-graphql-route-${var.ENV}"
  afd_app_route_name      = "vite-fs-app-route-${var.ENV}"
}