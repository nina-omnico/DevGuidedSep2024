define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "af2d1ce1-dddc-4fa1-9caa-01bdaf1d4dd8",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_2kxbn70",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_a15ezvf",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_a15ezvf",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_m1paqso",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommisionUSD_bjc9od9",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommisionUSD_bjc9od9",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_lvhq97a",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_o4dlbvr",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_o4dlbvr"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_otvwki9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_92m6yn0",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_92m6yn0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_wnokkz8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wnokkz8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_otvwki9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_w463cta",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_duhtsl9",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_duhtsl9",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_r3ohptf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_r3ohptf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_w463cta",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_64b7wpm",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_togwy36",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_togwy36",
					"multiline": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_4n5mlie",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_4n5mlie_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_q37z9la",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_4n5mlie",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ntayisb",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_q37z9la",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_rr675te",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_rr675te_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "FlexContainer_ntayisb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_xzbdocs",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_xzbdocs_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_zgmaox5DS"
						}
					}
				},
				"parentName": "FlexContainer_ntayisb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_c08dycw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_c08dycw_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ntayisb",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_7usu49q",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_7usu49q_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_zgmaox5"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_c08dycw",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_tawk9ih",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_tawk9ih_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_c08dycw",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_z7oxima",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_z7oxima_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [],
						"from": [
							"GridDetailSearchFilter_z7oxima_SearchValue",
							"GridDetailSearchFilter_z7oxima_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ntayisb",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_un9agl4",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_4n5mlie",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zgmaox5",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_zgmaox5",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_zgmaox5DS_Id",
					"columns": [
						{
							"id": "6147ff6c-492a-0446-c6ce-45ad6ce6abd8",
							"code": "GridDetail_zgmaox5DS_UsrComment",
							"caption": "#ResourceString(GridDetail_zgmaox5DS_UsrComment)#",
							"dataValueType": 28,
							"width": 130
						},
						{
							"id": "eae2f462-1420-48eb-caf8-35de654591dc",
							"code": "GridDetail_zgmaox5DS_UsrOwner",
							"caption": "#ResourceString(GridDetail_zgmaox5DS_UsrOwner)#",
							"dataValueType": 28,
							"width": 168
						},
						{
							"id": "83badd1b-2d73-1722-dd30-8b0be71e09a1",
							"code": "GridDetail_zgmaox5DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_zgmaox5DS_UsrPotentialCustomer)#",
							"dataValueType": 28
						},
						{
							"id": "a98309c4-ec15-b463-942f-5597e96956c6",
							"code": "GridDetail_zgmaox5DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_zgmaox5DS_UsrVisitDateTime)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_un9agl4",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrPriceUSD_a15ezvf": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(MinPriceArea)#"
								}
							}
						}
					},
					"PDS_UsrCommisionUSD_bjc9od9": {
						"modelConfig": {
							"path": "PDS.UsrCommisionUSD"
						}
					},
					"PDS_UsrArea_o4dlbvr": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(MinPriceArea)#"
								}
							}
						}
					},
					"PDS_UsrType_92m6yn0": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrComment_togwy36": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrOfferType_duhtsl9": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"GridDetail_zgmaox5": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_zgmaox5DS",
							"filterAttributes": [],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrOwner"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_zgmaox5DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_zgmaox5DS.UsrComment"
									}
								},
								"GridDetail_zgmaox5DS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_zgmaox5DS.UsrOwner"
									}
								},
								"GridDetail_zgmaox5DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_zgmaox5DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_zgmaox5DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_zgmaox5DS.UsrVisitDateTime"
									}
								},
								"GridDetail_zgmaox5DS_Id": {
									"modelConfig": {
										"path": "GridDetail_zgmaox5DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_zgmaox5DS": [
							{
								"attributePath": "UsrRealtyParent",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty"
						},
						"scope": "page"
					},
					"GridDetail_zgmaox5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
            request: "crt.HandleViewModelAttributeChangeRequest",
           handler: async (request, next) =>
             {
               if (request.attributeName === 'PDS_UsrPriceUSD_a15ezvf') {
                 const priceValue = await request.$context.PDS_UsrPriceUSD_a15ezvf;
                 const isPriceOver5000 = priceValue > 5000;
                 if (isPriceOver5000) {
                   request.$context.enableAttributeValidator('PDS_UsrComment_togwy36', 'required');
                 }
                 else {
                   request.$context.disableAttributeValidator('PDS_UsrComment_togwy36', 'required');
                 }
               }
               return next?.handle(request);
             }
           },
          {
            request: "crt.HandleViewModelAttributeChangeRequest",
           handler: async (request, next) =>
           {
            
              if (request.attributeName === 'PDS_UsrPriceUSD_a9i9zwv' || request.attributeName==='PDS_UsrOfferType_duhtsl9') {
                const price=await request.$context.PDS_UsrPriceUSD_a15ezvf;
                const offer=await request.$context.PDS_UsrOfferType_duhtsl9;
                const displayValue=offer?.displayValue;
                let percentage=0;
                if(displayValue==="Sale"){
                  percentage=0.45;
                          const total=price * percentage;
                  request.$context.PDS_UsrCommisionUSD_bjc9od9=total;
                }else{
                  percentage=0.018;
                          const total=price * percentage;
                  request.$context.PDS_UsrCommisionUSD_bjc9od9=total;
                }
              }
         }
}
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          "usr.DGValidator": {
           /* Business logic of the validator. */
           "validator": function (config) {
               return function (control) {
                   let value = control.value;
                   let minValue = config.minValue;
                   return value >= minValue ? null : {
                       "usr.DGValidator": { message: config.message }
                   };
               };
           },
           /* Validator parameters. */
           "params": [
               {
                   "name": "minValue"
               },
               {
                   "name": "message"
               }
           ],
           "async": false
       }
        }/**SCHEMA_VALIDATORS*/
	};
});