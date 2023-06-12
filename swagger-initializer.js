window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    spec:{
      "openapi": "3.0.1",
      "info": {
        "title": "MobileShopAPI",
        "description": "Web API for second hand mobile electrical item",
        "termsOfService": "https://example.com/terms",
        "contact": {
          "name": "Example Contact",
          "url": "https://example.com/contact"
        },
        "license": {
          "name": "Example License",
          "url": "https://example.com/license"
        },
        "version": "v1"
      },
      "paths": {
        "/api/Auth/register": {
          "post": {
            "tags": [
              "Auth"
            ],
            "summary": "Register a user",
            "description": "Heyyyyyyyyy",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RegisterViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RegisterViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/RegisterViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Account created",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Account has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Auth/login": {
          "post": {
            "tags": [
              "Auth"
            ],
            "summary": "Login a user",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/LoginViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/LoginViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/LoginViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "User logged in!",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Account has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Auth/confirmEmail": {
          "get": {
            "tags": [
              "Auth"
            ],
            "summary": "Confirm user email",
            "parameters": [
              {
                "name": "userId",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              },
              {
                "name": "token",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Your email has been confirmed successfully!",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Token invalid",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Auth/confirmChangeEmail": {
          "get": {
            "tags": [
              "Auth"
            ],
            "summary": "Confirm new email of user",
            "parameters": [
              {
                "name": "userId",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              },
              {
                "name": "newEmail",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              },
              {
                "name": "token",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Your email has been confirmed successfully!",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Token invalid",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Auth/forgetPassword": {
          "post": {
            "tags": [
              "Auth"
            ],
            "summary": "Send reset password Url with security token to user email",
            "parameters": [
              {
                "name": "email",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Reset password url has been sent successfully!",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "User not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Auth/resetPassword": {
          "post": {
            "tags": [
              "Auth"
            ],
            "summary": "Reset user password",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResetPasswordViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResetPasswordViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResetPasswordViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Password has been reset successfully!",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Password does not match/token invalid",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Auth/changeEmail": {
          "post": {
            "tags": [
              "Auth"
            ],
            "summary": "Reset user password",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResetEmailViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResetEmailViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ResetEmailViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Email has been changed successfully!",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Token invalid",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Brand/getAll": {
          "get": {
            "tags": [
              "Brand"
            ],
            "summary": "Get all brand",
            "responses": {
              "200": {
                "description": "Get all brand"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Brand/getById/{id}": {
          "get": {
            "tags": [
              "Brand"
            ],
            "summary": "Get brand detail",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Brand infos"
              },
              "400": {
                "description": "Brand not found"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Brand/add": {
          "post": {
            "tags": [
              "Brand"
            ],
            "summary": "Add brand",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BrandViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BrandViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BrandViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "New Brand Added",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Brand/update/{id}": {
          "put": {
            "tags": [
              "Brand"
            ],
            "summary": "update brand",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BrandViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BrandViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BrandViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This Brand Updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Brand/delete/{id}": {
          "delete": {
            "tags": [
              "Brand"
            ],
            "summary": "delete brand",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "This Brand Deleted",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Category/getAll": {
          "get": {
            "tags": [
              "Category"
            ],
            "summary": "Get all categogies",
            "responses": {
              "200": {
                "description": "Get all categogies"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Category/getById/{id}": {
          "get": {
            "tags": [
              "Category"
            ],
            "summary": "Get category detail",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Category infos"
              },
              "400": {
                "description": "Category not found"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Category/add": {
          "post": {
            "tags": [
              "Category"
            ],
            "summary": "Add Category",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CategoryViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CategoryViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/CategoryViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "New Category Added",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Category/update/{id}": {
          "put": {
            "tags": [
              "Category"
            ],
            "summary": "update category",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CategoryViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CategoryViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/CategoryViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This Category Updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CategoryResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Category/delete/{id}": {
          "delete": {
            "tags": [
              "Category"
            ],
            "summary": "delete category",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "This Category Deleted",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinAction/getAll": {
          "get": {
            "tags": [
              "CoinAction"
            ],
            "summary": "Get all CoinAction",
            "responses": {
              "200": {
                "description": "Get all CoinAction"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinAction/getById/{id}": {
          "get": {
            "tags": [
              "CoinAction"
            ],
            "summary": "Get CoinAction detail",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Coin Action infos"
              },
              "400": {
                "description": "Coin Action not found"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinAction/add": {
          "post": {
            "tags": [
              "CoinAction"
            ],
            "summary": "Add CoinAction",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinActionViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinActionViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinActionViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "New Coin_Action Added",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinAction/update/{id}": {
          "put": {
            "tags": [
              "CoinAction"
            ],
            "summary": "update CoinAction",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinActionViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinActionViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinActionViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This Coin_Action Updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinAction/delete/{id}": {
          "delete": {
            "tags": [
              "CoinAction"
            ],
            "summary": "delete Coin Action",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "This Coin_Action Deleted",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinActionResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinPackage/getAll": {
          "get": {
            "tags": [
              "CoinPackage"
            ],
            "summary": "Get all Coin_Package",
            "responses": {
              "200": {
                "description": "Get all Coin_Package"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinPackage/getById/{id}": {
          "get": {
            "tags": [
              "CoinPackage"
            ],
            "summary": "Get Coin_Package detail",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Coin_Package infos"
              },
              "400": {
                "description": "Coin_Package not found"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinPackage/add": {
          "post": {
            "tags": [
              "CoinPackage"
            ],
            "summary": "Add Coin_Package",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinPackageViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinPackageViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinPackageViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "New Coin Package Added",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinPackage/update/{id}": {
          "put": {
            "tags": [
              "CoinPackage"
            ],
            "summary": "update Coin Package",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinPackageViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinPackageViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/CoinPackageViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This Coin Package Updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/CoinPackage/delete/{id}": {
          "delete": {
            "tags": [
              "CoinPackage"
            ],
            "summary": "delete Coin Package",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "This Coin Package Deleted",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/CoinPackageResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Color/getAll": {
          "get": {
            "tags": [
              "Color"
            ],
            "summary": "Get all Color",
            "responses": {
              "200": {
                "description": "Get all color"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Color/getById/{id}": {
          "get": {
            "tags": [
              "Color"
            ],
            "summary": "Get color detail",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Color infos"
              },
              "400": {
                "description": "Color not found"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Color/add": {
          "post": {
            "tags": [
              "Color"
            ],
            "summary": "Add Color",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ColorViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ColorViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ColorViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "New Color Added",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Color/update/{id}": {
          "put": {
            "tags": [
              "Color"
            ],
            "summary": "update color",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ColorViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ColorViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ColorViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This Color Updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Color/delete/{id}": {
          "delete": {
            "tags": [
              "Color"
            ],
            "summary": "delete color",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "This Color Deleted",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ColorResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/InternalTransaction/getAll": {
          "get": {
            "tags": [
              "InternalTransaction"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/InternalTransaction/getByUserId/{id}": {
          "get": {
            "tags": [
              "InternalTransaction"
            ],
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/InternalTransaction/getBySubscriptionId/{id}": {
          "get": {
            "tags": [
              "InternalTransaction"
            ],
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int32"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/InternalTransaction/getByCoinActionId/{id}": {
          "get": {
            "tags": [
              "InternalTransaction"
            ],
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/InternalTransaction/add": {
          "post": {
            "tags": [
              "InternalTransaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/InternalTransactionViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/InternalTransactionViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/InternalTransactionViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/Order/getAll": {
          "get": {
            "tags": [
              "Order"
            ],
            "summary": "Get all Order",
            "responses": {
              "200": {
                "description": "Get all Order",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Order"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Order"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Order"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Order/getListOrderByUser": {
          "get": {
            "tags": [
              "Order"
            ],
            "summary": "Get order detail by userid",
            "parameters": [
              {
                "name": "id",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "order  infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Order"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Order"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Order"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              },
              "400": {
                "description": "order  not found"
              }
            }
          }
        },
        "/api/Order/GetOrderDetail": {
          "get": {
            "tags": [
              "Order"
            ],
            "summary": "Get order detail",
            "parameters": [
              {
                "name": "id",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "order  infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderViewModel"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderViewModel"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderViewModel"
                    }
                  }
                }
              },
              "400": {
                "description": "order  not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Order/create": {
          "post": {
            "tags": [
              "Order"
            ],
            "summary": "Add Order",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OrderViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OrderViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/OrderViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Shipping Address has been added successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Order/edit/{Id}": {
          "put": {
            "tags": [
              "Order"
            ],
            "summary": "update order",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OrderUpdateViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OrderUpdateViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/OrderUpdateViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "order has been updated successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Order/delete/{Id}": {
          "delete": {
            "tags": [
              "Order"
            ],
            "summary": "update order",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "order has been updated successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/OrderResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Product/getAll": {
          "get": {
            "tags": [
              "Product"
            ],
            "summary": "Get all non-hidden product",
            "description": "Product is hidden if \"Status = 2 , 3\" or \"isHidden = true\"",
            "responses": {
              "200": {
                "description": "Get all non-hidden product",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Product"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Product"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Product"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Product/AdminGetAll": {
          "get": {
            "tags": [
              "Product"
            ],
            "summary": "Get all product",
            "description": "Only admin can access this API",
            "responses": {
              "200": {
                "description": "Get all product",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Product"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Product"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Product"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Product/getById/{id}": {
          "get": {
            "tags": [
              "Product"
            ],
            "summary": "Get non-hidden product detail",
            "description": "Product is hidden if \"Status = 2 , 3\" or \"isHidden = true\"",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Product infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductDetailViewModel"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductDetailViewModel"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductDetailViewModel"
                    }
                  }
                }
              },
              "400": {
                "description": "Product not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Product/AdminGetById/{id}": {
          "get": {
            "tags": [
              "Product"
            ],
            "summary": "Get product detail",
            "description": "Only admin can access this API",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Product infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductDetailViewModel"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductDetailViewModel"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductDetailViewModel"
                    }
                  }
                }
              },
              "400": {
                "description": "Product not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Product/add": {
          "post": {
            "tags": [
              "Product"
            ],
            "summary": "Add product",
            "description": "Add image along with product:\r\n\r\n    POST\r\n    {\r\n        \"id\": 0, (not require, can be any number but null)\r\n        \"url\": \"string\", (required)\r\n        \"isCover\": false, (not require, true/false makes no differences)\r\n        \"isDeleted\": false, (not require, true/false makes no differences)\r\n        \"isNewlyAdded\": false (not require, true/false makes no differences)\r\n    }",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProductViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProductViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProductViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Product has been added successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Product/ApproveProduct/{id}": {
          "post": {
            "tags": [
              "Product"
            ],
            "summary": "Approve product",
            "description": "Approve product, change status to 0 and isHidden to false",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Product has been approved",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Product/update/{id}": {
          "put": {
            "tags": [
              "Product"
            ],
            "summary": "update product",
            "description": "Change product's cover:\r\n\r\n    PUT\r\n    {\r\n        \"id\": 0, (id of an image you want it to be the cover)\r\n        \"url\": \"string\", ( not required)\r\n        \"isCover\": true, (must be TRUE)\r\n        \"isDeleted\": false, (must be FALSE)\r\n        \"isNewlyAdded\": false (must be FALSE)\r\n    }\r\n    \r\nAdd new image to product:\r\n\r\n    PUT\r\n    {\r\n        \"id\": 0, (not required)\r\n        \"url\": \"string\", (required)\r\n        \"isCover\": true, (could be true, if true the newly added image will be product's new cover)\r\n        \"isDeleted\": false, (must be FALSE)\r\n        \"isNewlyAdded\": false (must be TRUE)   \r\n    }\r\n    \r\nDelete image:\r\n\r\n    PUT\r\n    {\r\n        \"id\": 0, (required)\r\n        \"url\": \"string\", ( not required)\r\n        \"isCover\": true, (must be FALSE)\r\n        \"isDeleted\": false, (must be TRUE)\r\n        \"isNewlyAdded\": false (must be FALSE)   \r\n    }",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProductViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProductViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProductViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Product has been updated successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Product/delete/{id}": {
          "delete": {
            "tags": [
              "Product"
            ],
            "summary": "delete product",
            "description": "If product already had an order and transaction\r\nit will be soft deleted by setting it status to 3",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Product has been deleted successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProductResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Report/getAll": {
          "get": {
            "tags": [
              "Report"
            ],
            "summary": "Get all report",
            "responses": {
              "200": {
                "description": "Get all report",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Report"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Report"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Report"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Report/getAllReportOfUser/{userId}": {
          "get": {
            "tags": [
              "Report"
            ],
            "summary": "Get all report of user by userid",
            "description": "Get Id of user\"",
            "parameters": [
              {
                "name": "userId",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Report infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/Report"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Report"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Report"
                    }
                  }
                }
              },
              "400": {
                "description": "Report of user not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Report/getById/{id}": {
          "get": {
            "tags": [
              "Report"
            ],
            "summary": "Get report detail",
            "description": "Get Id of user",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Report infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/Report"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Report"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Report"
                    }
                  }
                }
              },
              "400": {
                "description": "Report not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Report/add": {
          "post": {
            "tags": [
              "Report"
            ],
            "summary": "Add report",
            "description": "Add report of user",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Report has been added successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  }
                }
              },
              "404": {
                "description": "Report has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Report/update/{id}": {
          "put": {
            "tags": [
              "Report"
            ],
            "summary": "update report",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Report has been updated successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  }
                }
              },
              "404": {
                "description": "Report has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Report/delete/{id}": {
          "delete": {
            "tags": [
              "Report"
            ],
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  }
                }
              },
              "404": {
                "description": "Not Found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportResponse"
                    }
                  }
                }
              },
              "500": {
                "description": "Server Error"
              }
            }
          }
        },
        "/api/ReportCategory/getAll": {
          "get": {
            "tags": [
              "ReportCategory"
            ],
            "summary": "Get all report category",
            "responses": {
              "200": {
                "description": "Get all report category",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ReportCategory"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ReportCategory"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ReportCategory"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/ReportCategory/getById/{id}": {
          "get": {
            "tags": [
              "ReportCategory"
            ],
            "summary": "Get report category detail",
            "description": "Get Id of report category\"",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Report category infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategory"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategory"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategory"
                    }
                  }
                }
              },
              "400": {
                "description": "Report category not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/ReportCategory/add": {
          "post": {
            "tags": [
              "ReportCategory"
            ],
            "summary": "Add report category",
            "description": "Add report category",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportCategoryViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportCategoryViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportCategoryViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Report category has been added successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  }
                }
              },
              "404": {
                "description": "Report category has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/ReportCategory/update/{id}": {
          "put": {
            "tags": [
              "ReportCategory"
            ],
            "summary": "update report category",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportCategoryViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportCategoryViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReportCategoryViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Report category has been updated successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  }
                }
              },
              "404": {
                "description": "Report category has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/ReportCategory/delete/{id}": {
          "delete": {
            "tags": [
              "ReportCategory"
            ],
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  }
                }
              },
              "404": {
                "description": "Not Found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ReportCategoryResponse"
                    }
                  }
                }
              },
              "500": {
                "description": "Server Error"
              }
            }
          }
        },
        "/api/ShippingAddress/getAll": {
          "get": {
            "tags": [
              "ShippingAddress"
            ],
            "summary": "Get all Shipping Address",
            "responses": {
              "200": {
                "description": "Get all shipping address",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ShippingAddress"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ShippingAddress"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ShippingAddress"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/ShippingAddress/getById/{id}": {
          "get": {
            "tags": [
              "ShippingAddress"
            ],
            "summary": "Get Shipping Address detail",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Shipping address infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressViewModel"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressViewModel"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressViewModel"
                    }
                  }
                }
              },
              "400": {
                "description": "Shipping address not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ProblemDetails"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/ShippingAddress/create": {
          "post": {
            "tags": [
              "ShippingAddress"
            ],
            "summary": "Add Shipping Address",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ShippingAddressViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ShippingAddressViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ShippingAddressViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Shipping Address has been added successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/ShippingAddress/update/{id}": {
          "put": {
            "tags": [
              "ShippingAddress"
            ],
            "summary": "Update Shipping Address",
            "description": "",
            "parameters": [
              {
                "name": "addressId",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              {
                "name": "id",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ShippingAddressViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ShippingAddressViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ShippingAddressViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Shipping Address has been added successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/ShippingAddress/delete/{id}": {
          "delete": {
            "tags": [
              "ShippingAddress"
            ],
            "summary": "delete Shipping address",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Shipping address has been deleted successfully",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/ShippingAddressResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Size/getAll": {
          "get": {
            "tags": [
              "Size"
            ],
            "summary": "Get all size",
            "responses": {
              "200": {
                "description": "Get all size"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Size/getById/{id}": {
          "get": {
            "tags": [
              "Size"
            ],
            "summary": "Get size detail",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Size infos"
              },
              "400": {
                "description": "Size not found"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Size/add": {
          "post": {
            "tags": [
              "Size"
            ],
            "summary": "Add size",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SizeViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SizeViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/SizeViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "New Size Added",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BrandResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Size/update/{id}": {
          "put": {
            "tags": [
              "Size"
            ],
            "summary": "update size",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SizeViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SizeViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/SizeViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This Size Updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/Size/delete/{id}": {
          "delete": {
            "tags": [
              "Size"
            ],
            "summary": "delete size",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "This Size Deleted",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SizeResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/SubscriptionPackage/getAll": {
          "get": {
            "tags": [
              "SubscriptionPackage"
            ],
            "summary": "Get all Subscription Package",
            "responses": {
              "200": {
                "description": "Get all Subscription Package"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/SubscriptionPackage/getById/{id}": {
          "get": {
            "tags": [
              "SubscriptionPackage"
            ],
            "summary": "Get Subscription detail",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Subscription Package infos"
              },
              "400": {
                "description": "Subscription Package not found"
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/SubscriptionPackage/add": {
          "post": {
            "tags": [
              "SubscriptionPackage"
            ],
            "summary": "Add Subsciption Package",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "New Subscription Package Added",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/SubscriptionPackage/update/{id}": {
          "put": {
            "tags": [
              "SubscriptionPackage"
            ],
            "summary": "update Subscription Package",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This Subscription Package Updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/SubscriptionPackage/updateStatus/{id}": {
          "put": {
            "tags": [
              "SubscriptionPackage"
            ],
            "summary": "update Subscription Status",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageStatusViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageStatusViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriptionPackageStatusViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This Status Updated"
              },
              "400": {
                "description": "Model has missing/invalid values"
              }
            }
          }
        },
        "/api/SubscriptionPackage/delete/{id}": {
          "delete": {
            "tags": [
              "SubscriptionPackage"
            ],
            "summary": "delete Subscription Package",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "This Subscription Package Deleted",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriptionPackageResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/test/AuthorizeTest": {
          "get": {
            "tags": [
              "test"
            ],
            "summary": "Create for testing only, front-end group can ignore this",
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/test/getBaseUrl": {
          "get": {
            "tags": [
              "test"
            ],
            "summary": "Create for testing only, front-end group can ignore this",
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "string"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "string"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/test/getUniqueString": {
          "get": {
            "tags": [
              "test"
            ],
            "summary": "Created for testing only, front-end group can ignore this",
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "string"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "string"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/User/getAll": {
          "get": {
            "tags": [
              "User"
            ],
            "summary": "Get a list of all user",
            "responses": {
              "200": {
                "description": "List of user",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserViewModel"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserViewModel"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserViewModel"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/User/getProfile": {
          "get": {
            "tags": [
              "User"
            ],
            "summary": "Get user profile",
            "parameters": [
              {
                "name": "userId",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "User profile",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/User/updateProfile": {
          "put": {
            "tags": [
              "User"
            ],
            "summary": "Update user profile",
            "parameters": [
              {
                "name": "userId",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UpdateUserProfileViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UpdateUserProfileViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/UpdateUserProfileViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "User profile updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserViewModel"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/User/ban": {
          "post": {
            "tags": [
              "User"
            ],
            "summary": "Ban user account",
            "parameters": [
              {
                "name": "userId",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "User has been banned",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserManagerResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/UserRating/getAll": {
          "get": {
            "tags": [
              "UserRating"
            ],
            "summary": "Get all UserRating",
            "responses": {
              "200": {
                "description": "Get all UserRaiting",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/UserRating/getById/{id}": {
          "get": {
            "tags": [
              "UserRating"
            ],
            "summary": "Get UserRaiting detail",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "UserRaiting infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "UserRaiting not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/UserRating"
                      }
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/UserRating/getByUserId/{id}": {
          "get": {
            "tags": [
              "UserRating"
            ],
            "summary": "Get UserRaiting's List",
            "description": "Return UserRaiting's List Of This UserId",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "UserRaiting infos",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRating"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRating"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRating"
                    }
                  }
                }
              },
              "400": {
                "description": "UserRaiting not found",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRating"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRating"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRating"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/UserRating/add": {
          "post": {
            "tags": [
              "UserRating"
            ],
            "summary": "Add UserRaiting",
            "description": "",
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRatingViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRatingViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRatingViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "New User Raiting Added",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/UserRating/update/{id}": {
          "put": {
            "tags": [
              "UserRating"
            ],
            "summary": "update User Raiting",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "requestBody": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRatingViewModel"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRatingViewModel"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRatingViewModel"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "This User Raiting Updated",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Model has missing/invalid values",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/UserRating/delete/{id}": {
          "delete": {
            "tags": [
              "UserRating"
            ],
            "summary": "delete UserRating",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "This User Raiting Deleted",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  }
                }
              },
              "400": {
                "description": "Something went wrong",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UserRatingResponse"
                    }
                  }
                }
              },
              "500": {
                "description": ">Oops! Something went wrong"
              }
            }
          }
        },
        "/api/UserRating/getEverageRating": {
          "get": {
            "tags": [
              "UserRating"
            ],
            "summary": "Get Everage Raiting Of Product",
            "description": "",
            "parameters": [
              {
                "name": "id",
                "in": "query",
                "description": "",
                "schema": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "type": "number",
                      "format": "float"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "type": "number",
                      "format": "float"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "type": "number",
                      "format": "float"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "ActiveSubscription": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "usedPost": {
                "type": "integer",
                "description": "Số lượng bài đăng đã sử dụng",
                "format": "int32",
                "nullable": true
              },
              "expiredDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "activatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "userId": {
                "type": "string",
                "nullable": true
              },
              "spId": {
                "type": "integer",
                "format": "int64"
              },
              "sp": {
                "$ref": "#/components/schemas/SubscriptionPackage"
              },
              "user": {
                "$ref": "#/components/schemas/ApplicationUser"
              }
            },
            "additionalProperties": false
          },
          "ApplicationUser": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "nullable": true
              },
              "userName": {
                "type": "string",
                "nullable": true
              },
              "normalizedUserName": {
                "type": "string",
                "nullable": true
              },
              "email": {
                "type": "string",
                "nullable": true
              },
              "normalizedEmail": {
                "type": "string",
                "nullable": true
              },
              "emailConfirmed": {
                "type": "boolean"
              },
              "passwordHash": {
                "type": "string",
                "nullable": true
              },
              "securityStamp": {
                "type": "string",
                "nullable": true
              },
              "concurrencyStamp": {
                "type": "string",
                "nullable": true
              },
              "phoneNumber": {
                "type": "string",
                "nullable": true
              },
              "phoneNumberConfirmed": {
                "type": "boolean"
              },
              "twoFactorEnabled": {
                "type": "boolean"
              },
              "lockoutEnd": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "lockoutEnabled": {
                "type": "boolean"
              },
              "accessFailedCount": {
                "type": "integer",
                "format": "int32"
              },
              "firstName": {
                "type": "string",
                "nullable": true
              },
              "middleName": {
                "type": "string",
                "nullable": true
              },
              "lastName": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "type": "integer",
                "description": "active = 0\r\nbanned = 1",
                "format": "int32",
                "nullable": true
              },
              "avatarUrl": {
                "type": "string",
                "nullable": true
              },
              "userBalance": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "orders": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Order"
                },
                "nullable": true
              },
              "products": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Product"
                },
                "nullable": true
              },
              "transactions": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/VnpTransaction"
                },
                "nullable": true
              },
              "userRatings": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/UserRating"
                },
                "nullable": true
              },
              "activeSubscriptions": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ActiveSubscription"
                },
                "nullable": true
              },
              "internalTransactions": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InternalTransaction"
                },
                "nullable": true
              },
              "reports": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Report"
                },
                "nullable": true
              },
              "shippingAddresses": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ShippingAddress"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "Brand": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "imageUrl": {
                "type": "string",
                "description": "url hình ảnh",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "products": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Product"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BrandResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BrandViewModel": {
            "required": [
              "name"
            ],
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "imageUrl": {
                "type": "string",
                "description": "url hình ảnh",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "Category": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "imageUrl": {
                "type": "string",
                "description": "url hình ảnh",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "products": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Product"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "CategoryResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          "CategoryViewModel": {
            "required": [
              "name"
            ],
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "imageUrl": {
                "type": "string",
                "description": "url hình ảnh",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "CoinAction": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "actionName": {
                "type": "string",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "caCoinAmount": {
                "type": "integer",
                "description": "<example> 10000 or 20000 ....</example>",
                "format": "int32",
                "nullable": true
              },
              "status": {
                "type": "integer",
                "description": "0 = inactive\r\n1 = active (default)\r\n2 = soft deleted",
                "format": "int32"
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "internalTransactions": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InternalTransaction"
                },
                "nullable": true
              }
            },
            "additionalProperties": false,
            "description": "Actions on website using coin"
          },
          "CoinActionResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "CoinActionViewModel": {
            "required": [
              "actionName"
            ],
            "type": "object",
            "properties": {
              "actionName": {
                "type": "string"
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "caCoinAmount": {
                "type": "integer",
                "description": "<example> 10000 or 20000 ....</example>",
                "format": "int32",
                "nullable": true
              },
              "status": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "CoinPackage": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "nullable": true
              },
              "packageName": {
                "type": "string",
                "nullable": true
              },
              "packageValue": {
                "type": "integer",
                "format": "int64"
              },
              "valueUnit": {
                "type": "string",
                "description": "vnđ,...v.v",
                "nullable": true
              },
              "coinAmount": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "type": "integer",
                "description": "0 = inactive \r\n1 = active (default)\r\n2 = soft deleted",
                "format": "int32"
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "transactions": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/VnpTransaction"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "CoinPackageResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "CoinPackageViewModel": {
            "type": "object",
            "properties": {
              "packageName": {
                "type": "string",
                "nullable": true
              },
              "packageValue": {
                "type": "integer",
                "format": "int64"
              },
              "valueUnit": {
                "type": "string",
                "description": "vnđ,...v.v",
                "nullable": true
              },
              "coinAmount": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "Color": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "colorName": {
                "type": "string",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "hexValue": {
                "type": "string",
                "description": "Hex (Hexadecimal) is one of the methods of color definition",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "products": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Product"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ColorResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          "ColorViewModel": {
            "required": [
              "colorName",
              "hexValue"
            ],
            "type": "object",
            "properties": {
              "colorName": {
                "type": "string"
              },
              "hexValue": {
                "type": "string",
                "description": "Hex (Hexadecimal) is one of the methods of color definition"
              }
            },
            "additionalProperties": false
          },
          "Evidence": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "imageUrl": {
                "type": "string",
                "nullable": true
              },
              "reportId": {
                "type": "integer",
                "format": "int64"
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "report": {
                "$ref": "#/components/schemas/Report"
              }
            },
            "additionalProperties": false
          },
          "EvidenceViewModel": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "imageUrl": {
                "type": "string",
                "nullable": true
              },
              "reportId": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "Image": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "url": {
                "type": "string",
                "description": "url hình ảnh",
                "nullable": true
              },
              "isCover": {
                "type": "boolean",
                "description": "hình ảnh là ảnh bìa"
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "productId": {
                "type": "integer",
                "format": "int64"
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "product": {
                "$ref": "#/components/schemas/Product"
              }
            },
            "additionalProperties": false
          },
          "ImageViewModel": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "url": {
                "type": "string",
                "description": "url hình ảnh",
                "nullable": true
              },
              "isCover": {
                "type": "boolean",
                "description": "hình ảnh là ảnh bìa"
              },
              "isDeleted": {
                "type": "boolean",
                "description": "Biến này chỉ được sử dụng khi chỉnh sửa sản phẩm\r\nNếu đặt là true, hình ảnh này sẽ bị xóa"
              },
              "isNewlyAdded": {
                "type": "boolean",
                "description": "Biến này chỉ được sử dụng khi chỉnh sửa sản phẩm\r\nĐặt là true để đánh dấu hình ảnh được thêm mới"
              }
            },
            "additionalProperties": false
          },
          "InternalTransaction": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "nullable": true
              },
              "userId": {
                "type": "string",
                "nullable": true
              },
              "coinActionId": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "spId": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "itAmount": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              },
              "itInfo": {
                "type": "string",
                "nullable": true
              },
              "itSecureHash": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "coinAction": {
                "$ref": "#/components/schemas/CoinAction"
              },
              "sp": {
                "$ref": "#/components/schemas/SubscriptionPackage"
              },
              "user": {
                "$ref": "#/components/schemas/ApplicationUser"
              }
            },
            "additionalProperties": false
          },
          "InternalTransactionViewModel": {
            "type": "object",
            "properties": {
              "userId": {
                "type": "string",
                "nullable": true
              },
              "coinActionId": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "spId": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "LoginViewModel": {
            "required": [
              "password",
              "username"
            ],
            "type": "object",
            "properties": {
              "username": {
                "type": "string"
              },
              "password": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "Order": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "nullable": true
              },
              "total": {
                "type": "integer",
                "format": "int64"
              },
              "status": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              },
              "userId": {
                "type": "string",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updateDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "phoneNumber": {
                "type": "string",
                "nullable": true
              },
              "userFullName": {
                "type": "string",
                "nullable": true
              },
              "email": {
                "type": "string",
                "nullable": true
              },
              "address": {
                "type": "string",
                "nullable": true
              },
              "type": {
                "type": "integer",
                "description": "1 = trả hết, 2 = đặt cọc",
                "format": "int32",
                "nullable": true
              },
              "user": {
                "$ref": "#/components/schemas/ApplicationUser"
              },
              "productOrders": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOrder"
                },
                "nullable": true
              },
              "transactions": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/VnpTransaction"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "OrderResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "OrderUpdateViewModel": {
            "required": [
              "address",
              "email",
              "phoneNumber",
              "total",
              "userFullName"
            ],
            "type": "object",
            "properties": {
              "total": {
                "type": "integer",
                "format": "int64"
              },
              "status": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              },
              "phoneNumber": {
                "type": "string"
              },
              "userFullName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "address": {
                "type": "string"
              },
              "type": {
                "type": "integer",
                "description": "1 = trả hết, 2 = đặt cọc",
                "format": "int32",
                "nullable": true
              },
              "productOrder": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOrderViewModel"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "OrderViewModel": {
            "required": [
              "address",
              "email",
              "id",
              "phoneNumber",
              "total",
              "userFullName",
              "userId"
            ],
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "total": {
                "type": "integer",
                "format": "int64"
              },
              "status": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              },
              "userId": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "userFullName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "address": {
                "type": "string"
              },
              "type": {
                "type": "integer",
                "description": "1 = trả hết, 2 = đặt cọc",
                "format": "int32",
                "nullable": true
              },
              "productOrder": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOrderViewModel"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ProblemDetails": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "nullable": true
              },
              "title": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              },
              "detail": {
                "type": "string",
                "nullable": true
              },
              "instance": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": { }
          },
          "Product": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "stock": {
                "type": "integer",
                "format": "int32"
              },
              "price": {
                "type": "integer",
                "format": "int64"
              },
              "status": {
                "type": "integer",
                "description": "in stock = 0\r\nout of stock = 1\r\nunapproved = 2\r\nsoft deleted = 3\r\nUser can not modify this value",
                "format": "int32",
                "nullable": true
              },
              "categoryId": {
                "type": "integer",
                "format": "int64"
              },
              "brandId": {
                "type": "integer",
                "format": "int64"
              },
              "isHidden": {
                "type": "boolean",
                "description": "Product is hidden if true"
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "userId": {
                "type": "string",
                "nullable": true
              },
              "sizeId": {
                "type": "integer",
                "format": "int64"
              },
              "colorId": {
                "type": "integer",
                "format": "int64"
              },
              "priorities": {
                "type": "integer",
                "description": "Used for sorting algorithms",
                "format": "int32",
                "nullable": true
              },
              "updateDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "brand": {
                "$ref": "#/components/schemas/Brand"
              },
              "category": {
                "$ref": "#/components/schemas/Category"
              },
              "color": {
                "$ref": "#/components/schemas/Color"
              },
              "size": {
                "$ref": "#/components/schemas/Size"
              },
              "user": {
                "$ref": "#/components/schemas/ApplicationUser"
              },
              "images": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Image"
                },
                "nullable": true
              },
              "productOrders": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ProductOrder"
                },
                "nullable": true
              },
              "userRatings": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/UserRating"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ProductDetailViewModel": {
            "type": "object",
            "properties": {
              "product": {
                "$ref": "#/components/schemas/Product"
              },
              "user": {
                "$ref": "#/components/schemas/UserViewModel"
              }
            },
            "additionalProperties": false
          },
          "ProductOrder": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "quantity": {
                "type": "integer",
                "format": "int32"
              },
              "productId": {
                "type": "integer",
                "format": "int64"
              },
              "orderId": {
                "type": "string",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "order": {
                "$ref": "#/components/schemas/Order"
              },
              "product": {
                "$ref": "#/components/schemas/Product"
              }
            },
            "additionalProperties": false
          },
          "ProductOrderViewModel": {
            "required": [
              "orderId",
              "productId",
              "quantity"
            ],
            "type": "object",
            "properties": {
              "productId": {
                "type": "integer",
                "format": "int64"
              },
              "orderId": {
                "type": "string"
              },
              "quantity": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "ProductResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ProductViewModel": {
            "required": [
              "brandId",
              "categoryId",
              "colorId",
              "name",
              "price",
              "sizeId",
              "stock",
              "userId"
            ],
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "stock": {
                "type": "integer",
                "format": "int32"
              },
              "price": {
                "type": "integer",
                "format": "int64"
              },
              "status": {
                "type": "integer",
                "description": "in stock = 0\r\nout of stock = 1\r\nunapproved = 2\r\nsoft deleted = 3\r\nUser can not modify this value",
                "format": "int32"
              },
              "isHidden": {
                "type": "boolean",
                "description": "Product is hidden if true"
              },
              "categoryId": {
                "type": "integer",
                "format": "int64"
              },
              "brandId": {
                "type": "integer",
                "format": "int64"
              },
              "userId": {
                "type": "string"
              },
              "sizeId": {
                "type": "integer",
                "format": "int64"
              },
              "colorId": {
                "type": "integer",
                "format": "int64"
              },
              "images": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ImageViewModel"
                },
                "description": "Images list of this product",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "RegisterViewModel": {
            "required": [
              "confirmPassword",
              "email",
              "password",
              "username"
            ],
            "type": "object",
            "properties": {
              "username": {
                "type": "string"
              },
              "email": {
                "type": "string",
                "format": "email"
              },
              "password": {
                "type": "string"
              },
              "confirmPassword": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "Report": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "subject": {
                "type": "string",
                "nullable": true
              },
              "body": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "type": "integer",
                "description": "0 = pending (default)\r\n1 = solved\r\n2 = soft deleted",
                "format": "int32"
              },
              "reportedUserId": {
                "type": "string",
                "description": "UserId of user who being reported",
                "nullable": true
              },
              "reportedProductId": {
                "type": "integer",
                "description": "ProductId of product that being reported",
                "format": "int64",
                "nullable": true
              },
              "userId": {
                "type": "string",
                "description": "user id of user who sent the report",
                "nullable": true
              },
              "reportCategoryId": {
                "type": "integer",
                "format": "int64"
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "reportCategory": {
                "$ref": "#/components/schemas/ReportCategory"
              },
              "user": {
                "$ref": "#/components/schemas/ApplicationUser"
              },
              "evidences": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Evidence"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ReportCategory": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string",
                "description": "Name of report category",
                "nullable": true
              },
              "description": {
                "type": "string",
                "description": "Description of report category",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "reports": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Report"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ReportCategoryResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ReportCategoryViewModel": {
            "required": [
              "name"
            ],
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "description": "Name of report category"
              },
              "description": {
                "type": "string",
                "description": "Description of report category",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ReportResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ReportViewModel": {
            "required": [
              "body",
              "reportCategoryId",
              "reportedProductId",
              "reportedUserId",
              "subject",
              "userId"
            ],
            "type": "object",
            "properties": {
              "subject": {
                "type": "string"
              },
              "body": {
                "type": "string"
              },
              "reportedUserId": {
                "type": "string"
              },
              "reportedProductId": {
                "type": "integer",
                "description": "ProductId of product that being reported",
                "format": "int64"
              },
              "userId": {
                "type": "string",
                "description": "user id of user who sent the report"
              },
              "reportCategoryId": {
                "type": "integer",
                "format": "int64"
              },
              "evidences": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/EvidenceViewModel"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ResetEmailViewModel": {
            "required": [
              "email",
              "newEmail",
              "password"
            ],
            "type": "object",
            "properties": {
              "email": {
                "type": "string",
                "format": "email"
              },
              "newEmail": {
                "type": "string",
                "format": "email"
              },
              "password": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "ResetPasswordViewModel": {
            "required": [
              "confirmPassword",
              "email",
              "newPassword",
              "token"
            ],
            "type": "object",
            "properties": {
              "token": {
                "type": "string"
              },
              "email": {
                "type": "string",
                "format": "email"
              },
              "newPassword": {
                "type": "string"
              },
              "confirmPassword": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "ShippingAddress": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "userId": {
                "type": "string",
                "nullable": true
              },
              "addressName": {
                "type": "string",
                "nullable": true
              },
              "phoneNumber": {
                "type": "string",
                "nullable": true
              },
              "isDefault": {
                "type": "boolean",
                "nullable": true
              },
              "wardId": {
                "type": "integer",
                "format": "int32"
              },
              "addressDetail": {
                "type": "string",
                "description": "house number, district name",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "user": {
                "$ref": "#/components/schemas/ApplicationUser"
              }
            },
            "additionalProperties": false
          },
          "ShippingAddressResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ShippingAddressViewModel": {
            "required": [
              "addressDetail",
              "addressName",
              "phoneNumber",
              "userId",
              "wardId"
            ],
            "type": "object",
            "properties": {
              "userId": {
                "type": "string"
              },
              "addressName": {
                "type": "string"
              },
              "phoneNumber": {
                "type": "string"
              },
              "isDefault": {
                "type": "boolean",
                "nullable": true
              },
              "wardId": {
                "type": "integer",
                "format": "int32"
              },
              "addressDetail": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "Size": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "sizeName": {
                "type": "string",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "products": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Product"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "SizeResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          "SizeViewModel": {
            "required": [
              "sizeName"
            ],
            "type": "object",
            "properties": {
              "sizeName": {
                "type": "string"
              },
              "description": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "SubscriptionPackage": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "price": {
                "type": "integer",
                "format": "int64"
              },
              "postAmout": {
                "type": "integer",
                "description": "Số lượng được tin đăng khi mua gói",
                "format": "int32"
              },
              "expiredIn": {
                "type": "integer",
                "description": "Số ngày sử dụng",
                "format": "int32"
              },
              "status": {
                "type": "integer",
                "description": "0 = inactive\r\n1 = active (default)\r\n2 = soft deleted",
                "format": "int32"
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "activeSubscriptions": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ActiveSubscription"
                },
                "nullable": true
              },
              "internalTransactions": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InternalTransaction"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "SubscriptionPackageResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "SubscriptionPackageStatusViewModel": {
            "type": "object",
            "properties": {
              "status": {
                "type": "integer",
                "description": "0 = inactive\r\n1 = active (default)\r\n2 = soft deleted",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "SubscriptionPackageViewModel": {
            "required": [
              "name"
            ],
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "price": {
                "type": "integer",
                "format": "int64"
              },
              "postAmout": {
                "type": "integer",
                "description": "Số lượng được tin đăng khi mua gói",
                "format": "int32"
              },
              "expiredIn": {
                "type": "integer",
                "description": "Số ngày sử dụng",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "UpdateUserProfileViewModel": {
            "type": "object",
            "properties": {
              "firstName": {
                "type": "string",
                "nullable": true
              },
              "middleName": {
                "type": "string",
                "nullable": true
              },
              "lastName": {
                "type": "string",
                "nullable": true
              },
              "avatarUrl": {
                "type": "string",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "phoneNumber": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "UserManagerResponse": {
            "type": "object",
            "properties": {
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              },
              "token": {
                "type": "string",
                "nullable": true
              },
              "expireDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "UserRating": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "rating": {
                "type": "integer",
                "description": "1,2,3,4,5",
                "format": "int32"
              },
              "comment": {
                "type": "string",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "productId": {
                "type": "integer",
                "format": "int64"
              },
              "usderId": {
                "type": "string",
                "nullable": true
              },
              "product": {
                "$ref": "#/components/schemas/Product"
              },
              "usder": {
                "$ref": "#/components/schemas/ApplicationUser"
              }
            },
            "additionalProperties": false
          },
          "UserRatingResponse": {
            "type": "object",
            "properties": {
              "rating": {
                "type": "number",
                "format": "float"
              },
              "message": {
                "type": "string",
                "nullable": true
              },
              "isSuccess": {
                "type": "boolean"
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "UserRatingViewModel": {
            "type": "object",
            "properties": {
              "rating": {
                "type": "integer",
                "description": "1, 2, 3, 4, 5",
                "format": "int32"
              },
              "comment": {
                "type": "string",
                "nullable": true
              },
              "productId": {
                "type": "integer",
                "format": "int64"
              },
              "usderId": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "UserViewModel": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "nullable": true
              },
              "username": {
                "type": "string",
                "nullable": true
              },
              "email": {
                "type": "string",
                "nullable": true
              },
              "firstName": {
                "type": "string",
                "nullable": true
              },
              "middleName": {
                "type": "string",
                "nullable": true
              },
              "lastName": {
                "type": "string",
                "nullable": true
              },
              "description": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              },
              "avatarUrl": {
                "type": "string",
                "nullable": true
              },
              "userBalance": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "createdDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "updatedDate": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "VnpTransaction": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "nullable": true
              },
              "userId": {
                "type": "string",
                "nullable": true
              },
              "orderId": {
                "type": "string",
                "nullable": true
              },
              "vnpVersion": {
                "type": "string",
                "nullable": true
              },
              "vnpCommand": {
                "type": "string",
                "nullable": true
              },
              "vnpTmnCode": {
                "type": "string",
                "nullable": true
              },
              "vnpAmount": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "vnpBankCode": {
                "type": "string",
                "nullable": true
              },
              "vnpCreateDate": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "vnpCurrCode": {
                "type": "string",
                "nullable": true
              },
              "vnpIpAddr": {
                "type": "string",
                "nullable": true
              },
              "vnpLocale": {
                "type": "string",
                "nullable": true
              },
              "vnpOrderInfo": {
                "type": "string",
                "nullable": true
              },
              "vnpOrderType": {
                "type": "string",
                "nullable": true
              },
              "vnpTxnRef": {
                "type": "string",
                "nullable": true
              },
              "vnpSecureHash": {
                "type": "string",
                "nullable": true
              },
              "packageId": {
                "type": "string",
                "nullable": true
              },
              "order": {
                "$ref": "#/components/schemas/Order"
              },
              "package": {
                "$ref": "#/components/schemas/CoinPackage"
              },
              "user": {
                "$ref": "#/components/schemas/ApplicationUser"
              }
            },
            "additionalProperties": false
          }
        },
        "securitySchemes": {
          "Bearer": {
            "type": "http",
            "description": "Please enter token",
            "scheme": "bearer",
            "bearerFormat": "JWT"
          }
        }
      },
      "security": [
        {
          "Bearer": [ ]
        }
      ]
    },
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
