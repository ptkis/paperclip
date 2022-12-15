use heck::ToLowerCamelCase;
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, iter::FromIterator};

/// OpenApiV3 newtype.
#[derive(Clone, Debug, Default, Serialize, Deserialize)]
pub struct OpenApiV3 {
    api: openapiv3::OpenAPI,

    api_template: HashMap<std::path::PathBuf, std::path::PathBuf>,
    model_templates: HashMap<std::path::PathBuf, std::path::PathBuf>,
    supporting: HashMap<std::path::PathBuf, std::path::PathBuf>,
    additional_properties: HashMap<std::path::PathBuf, std::path::PathBuf>,

    suppress_errors: bool,
}
impl OpenApiV3 {
    pub fn new(api: openapiv3::OpenAPI) -> Self {
        Self {
            api,
            api_template: HashMap::from_iter([(
                "./src/v3/templates/tower-hyper/client/api_client.mustache".into(),
                "/tower/client/mod.rs".into(),
            )]),
            model_templates: HashMap::from_iter([(
                "./src/v3/templates/model.mustache".into(),
                ".rs".into(),
            )]),
            ..Default::default()
        }
    }
}

use ramhorns::Template;
use ramhorns_derive::Content;

#[derive(Content)]
struct Api {
    classname: String,
    operations: Operations,
    models: Models,
}
#[derive(Content)]
struct Models {
    model: Vec<Model>,
}
#[derive(Default, Content, Serialize, Deserialize)]
struct PropertyType {}

#[derive(Default, Content, Serialize, Deserialize)]
#[ramhorns(rename_all = "camel_case")]
struct Model {
    // The schema name as written in the OpenAPI document.
    name: String,
    // The language-specific name of the class that implements this schema.
    // The name of the class is derived from the OpenAPI schema name with formatting rules applied.
    // The classname is derived from the OpenAPI schema name, with sanitization and escaping rules applied.
    classname: String,
    // The value of the 'title' attribute in the OpenAPI document.
    title: String,
    description: String,
    class_var_name: String,
    model_json: String,
    data_type: String,
    class_file_name: String,
    unescaped_description: String,
    is_string: bool,
    is_integer: bool,
    is_long: bool,
    is_number: bool,
    is_numeric: bool,
    is_float: bool,
    is_double: bool,
    is_date: bool,
    is_date_time: bool,
    is_decimal: bool,
    is_short: bool,
    is_unbounded_integer: bool,
    is_primitive_type: bool,
    is_boolean: bool,
    additional_properties_is_any_type: bool,
    // all properties (without parent's properties)
    vars: Vec<PropertyType>,
    // all properties (with parent's properties)
    all_vars: Vec<PropertyType>,
    // a list of required properties
    required_vars: Vec<PropertyType>,
    // a list of optional properties
    optional_vars: Vec<PropertyType>,
    // a list of read-only properties
    read_only_vars: Vec<PropertyType>,
    // a list of properties for read, write
    read_write_vars: Vec<PropertyType>,
    parent_vars: Vec<PropertyType>,
    allowable_values: HashMap<String, String>,

    // Sorted sets of required parameters.
    // public Set<String> mandatory = new TreeSet<>(); // without parent's required properties
    // public Set<String> allMandatory = new TreeSet<>(); // with parent's required properties

    // public Set<String> imports = new TreeSet<>();
    has_vars: bool,
    empty_vars: bool,
    has_more_models: bool,
    has_enums: bool,
    is_enum: bool,
    has_validation: bool,
    /**
     * Indicates the OAS schema specifies "nullable: true".
     */
    is_nullable: bool,
    /**
     * Indicates the type has at least one required property.
     */
    has_required: bool,
    /**
     * Indicates the type has at least one optional property.
     */
    has_optional: bool,
    is_array: bool,
    has_children: bool,
    is_map: bool,
    is_null: bool,
    /**
     * Indicates the OAS schema specifies "deprecated: true".
     */
    is_deprecated: bool,
    has_only_read_only: bool,
    // public ExternalDocumentation externalDocumentation;

    // public Map<String, Object> vendorExtensions = new HashMap<>();
    // private CodegenComposedSchemas composedSchemas;
    // private boolean hasMultipleTypes = false;
    /**
     * The type of the value for the additionalProperties keyword in the OAS document.
     * Used in map like objects, including composed schemas.
     *
     * In most programming languages, the additional (undeclared) properties are stored
     * in a map data structure, such as HashMap in Java, map in golang, or a dict in Python.
     * There are multiple ways to implement the additionalProperties keyword, depending
     * on the programming language and mustache template.
     * One way is to use class inheritance. For example in the generated Java code, the
     * generated model class may extend from HashMap to store the additional properties.
     * In that case 'CodegenModel.parent' is set to represent the class hierarchy.
     * Another way is to use CodegenModel.additionalPropertiesType. A code generator
     * such as Python does not use class inheritance to model additional properties.
     *
     * For example, in the OAS schema below, the schema has a declared 'id' property
     * and additional, undeclared properties of type 'integer' are allowed.
     *
     * type: object
     * properties:
     *   id:
     *     type: integer
     * additionalProperties:
     *   type: integer
     *
     */
    // public String additionalPropertiesType;

    /**
     * True if additionalProperties is set to true (boolean value)
     */
    // public boolean isAdditionalPropertiesTrue;
    max_properties: u64,
    min_properties: u64,
    unique_items: bool,
    max_items: u64,
    min_items: u64,
    max_length: u64,
    min_length: u64,
    exclusive_minimum: bool,
    exclusive_maximum: bool,
    minimum: String,
    maximum: String,
    pattern: String,
    //private Number multipleOf;
    //private CodegenProperty items;
    //private CodegenProperty additionalProperties;
    is_model: bool,
    has_required_vars: bool,
    has_discriminator_with_non_empty_mapping: bool,
    is_any_type: bool,
    is_uuid: bool,
}
#[derive(Content)]
struct Operations {
    operation: Vec<Operation>,
}
#[derive(Default, Content, Serialize, Deserialize)]
#[ramhorns(rename_all = "camel_case")]
struct Operation {
    description: Option<String>,
    summary: Option<String>,
    tags: Vec<String>,
    deprecated: Option<bool>,
    operation_id: Option<String>,
    operation_id_camel_case: Option<String>,
    all_params: Vec<Parameter>,
    has_params: bool,
    path_params: Vec<Parameter>,
    has_path_params: bool,
    query_params: Vec<Parameter>,
    has_query_params: bool,
    header_params: Vec<Parameter>,
    has_header_params: bool,
    path: String,
    method: String,
    support_multiple_responses: bool,
    return_type: String,
    vendor_extensions: HashMap<String, String>,
}
#[derive(Default, Debug, Clone, Content, Serialize, Deserialize)]
#[ramhorns(rename_all = "camel_case")]
struct Parameter {
    param_name: String,
    base_name: String,
    example: Option<String>,
    examples: Vec<String>,
    required: bool,
    deprecated: Option<bool>,
    is_nullable: bool,
    is_string: bool,
    is_array: bool,
    is_uuid: bool,
    is_primitive_type: bool,
    is_container: bool,
    data_type: String,
    vendor_extensions: HashMap<String, String>,
}
enum TemplateKind {
    Api(Api),
    Model,
    Supporting,
}

impl From<(&OpenApiV3, openapiv3::ParameterData)> for Parameter {
    fn from(value: (&OpenApiV3, openapiv3::ParameterData)) -> Self {
        let api = value.0;
        let param = value.1;
        let schema = match &param.format {
            openapiv3::ParameterSchemaOrContent::Schema(ref_s) => match ref_s {
                openapiv3::ReferenceOr::Reference { reference } => {
                    println!("{}", reference);
                    match api
                        .api
                        .components
                        .clone()
                        .unwrap_or_default()
                        .schemas
                        .get(&reference.replace("#/components/schemas/", ""))
                    {
                        None => {
                            api.missing_schema_ref(reference);
                            openapiv3::Schema {
                                schema_data: Default::default(),
                                schema_kind: openapiv3::SchemaKind::Any(
                                    openapiv3::AnySchema::default(),
                                ),
                            }
                        }
                        Some(ref_or) => match ref_or {
                            openapiv3::ReferenceOr::Reference { reference } => {
                                panic!("double reference not supported");
                            }
                            openapiv3::ReferenceOr::Item(schema) => {
                                //
                                if reference == "#/components/schemas/NexusShareProtocol" {
                                    println!("S: {:?}", schema);
                                }
                                schema.clone()
                            }
                        },
                    }
                }
                openapiv3::ReferenceOr::Item(schema) => {
                    //schema.schema_data
                    schema.clone()
                }
            },
            openapiv3::ParameterSchemaOrContent::Content(_) => {
                panic!("what?")
            }
        };
        let is_primitive_type = false;
        let is_container = false;
        Self {
            param_name: param.name,
            base_name: "".to_string(),
            example: param.example.map(|v| v.to_string()),
            examples: vec![],
            required: param.required,
            deprecated: param.deprecated,
            is_nullable: schema.schema_data.nullable,
            is_string: false,
            is_array: false,
            is_uuid: false,
            is_primitive_type,
            is_container,
            data_type: "".to_string(),
            vendor_extensions: param
                .extensions
                .into_iter()
                .map(|(k, v)| (k, v.to_string()))
                .collect(),
        }
    }
}

fn query_param(api: &OpenApiV3, value: openapiv3::Parameter) -> Option<Parameter> {
    match value {
        openapiv3::Parameter::Query {
            parameter_data,
            allow_reserved,
            style,
            allow_empty_value,
        } => {
            let parameter = Parameter::from((api, parameter_data));
            Some(parameter)
        }
        _ => None,
    }
}
fn path_param(api: &OpenApiV3, value: openapiv3::Parameter) -> Option<Parameter> {
    match value {
        openapiv3::Parameter::Path {
            parameter_data,
            style,
        } => {
            // if parameter_data.name == "volume_id" {
            //     println!("P: {:?}", parameter_data);
            //     std::process::exit(0);
            // }
            let parameter = Parameter::from((api, parameter_data));
            Some(parameter)
        }
        _ => None,
    }
}
fn header_param(api: &OpenApiV3, value: openapiv3::Parameter) -> Option<Parameter> {
    match value {
        openapiv3::Parameter::Header {
            parameter_data,
            style,
        } => {
            let parameter = Parameter::from((api, parameter_data));
            Some(parameter)
        }
        _ => None,
    }
}

impl From<(&OpenApiV3, &str, &str, &openapiv3::Operation)> for Operation {
    fn from(value: (&OpenApiV3, &str, &str, &openapiv3::Operation)) -> Self {
        let operation = value.3.clone();
        let query_params = operation
            .parameters
            .clone()
            .into_iter()
            .flat_map(|p| {
                match p {
                    // todo: need to handle this
                    openapiv3::ReferenceOr::Reference { .. } => None,
                    openapiv3::ReferenceOr::Item(item) => query_param(value.0, item),
                }
            })
            .collect::<Vec<_>>();
        let path_params = operation
            .parameters
            .clone()
            .into_iter()
            .flat_map(|p| {
                match p {
                    // todo: need to handle this
                    openapiv3::ReferenceOr::Reference { .. } => None,
                    openapiv3::ReferenceOr::Item(item) => path_param(value.0, item),
                }
            })
            .collect::<Vec<_>>();
        let all_params = query_params
            .iter()
            .chain(&path_params)
            .cloned()
            .collect::<Vec<_>>();
        Self {
            description: operation.description,
            summary: operation.summary,
            tags: operation.tags,
            deprecated: Some(operation.deprecated),
            operation_id_camel_case: operation
                .operation_id
                .as_ref()
                .map(|o| o.to_lower_camel_case()),
            operation_id: operation.operation_id,
            has_params: !all_params.is_empty(),
            all_params,
            has_path_params: !path_params.is_empty(),
            path_params,
            has_query_params: !query_params.is_empty(),
            query_params,
            header_params: vec![],
            has_header_params: false,
            path: value.1.to_string(),
            method: value.2.to_string(),
            support_multiple_responses: false,
            return_type: "return_type".to_string(),
            vendor_extensions: operation
                .extensions
                .into_iter()
                .map(|(k, v)| (k, v.to_string()))
                .collect(),
        }
    }
}

impl OpenApiV3 {
    fn missing_schema_ref(&self, reference: &str) {
        if !self.suppress_errors {
            //warn!(reference, "Schema reference not found");
            println!("Schema reference({}) not found", reference);
        }
    }
    pub fn run(&self) -> Result<(), std::io::Error> {
        // self.api_template
        //     .iter()
        //     .map(|(k, _v)| self.render(k))
        //     .collect::<Result<(), std::io::Error>>()?;

        self.model_templates
            .iter()
            .map(|(k, _v)| self.render(k))
            .collect::<Result<(), std::io::Error>>()?;

        Ok(())
    }
    fn render(&self, path: &std::path::PathBuf) -> Result<(), std::io::Error> {
        let mustache = std::fs::read_to_string(path)?;

        let operations = self
            .api
            .operations()
            .map(|(a, b, c)| (self, a, b, c))
            .map(From::from)
            .collect::<Vec<Operation>>();

        let operations = self
            .api
            .components
            .as_ref()
            .unwrap()
            .schemas
            .map(|(a, b, c)| (self, a, b, c))
            .map(From::from)
            .collect::<Vec<Operation>>();

        println!("{}", mustache);

        let tpl = Template::new(mustache).unwrap();

        let rendered = tpl.render(&Api {
            classname: "Nodes".to_string(),
            operations: Operations {
                operation: operations,
            },
            models: Models { model: vec![] },
        });

        println!("{}", rendered);

        Ok(())
    }
}
