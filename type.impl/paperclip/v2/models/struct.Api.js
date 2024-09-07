(function() {
    var type_impls = Object.fromEntries([["paperclip",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Api%3CArc%3CRwLock%3CParameter%3CResolvable%3CS%3E%3E%3E%3E,+Arc%3CRwLock%3CResponse%3CResolvable%3CS%3E%3E%3E%3E,+Resolvable%3CS%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/mod.rs.html#32\">source</a><a href=\"#impl-Api%3CArc%3CRwLock%3CParameter%3CResolvable%3CS%3E%3E%3E%3E,+Arc%3CRwLock%3CResponse%3CResolvable%3CS%3E%3E%3E%3E,+Resolvable%3CS%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html\" title=\"struct std::sync::rwlock::RwLock\">RwLock</a>&lt;<a class=\"struct\" href=\"paperclip/v2/models/struct.Parameter.html\" title=\"struct paperclip::v2::models::Parameter\">Parameter</a>&lt;<a class=\"enum\" href=\"paperclip/v2/models/enum.Resolvable.html\" title=\"enum paperclip::v2::models::Resolvable\">Resolvable</a>&lt;S&gt;&gt;&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html\" title=\"struct std::sync::rwlock::RwLock\">RwLock</a>&lt;<a class=\"struct\" href=\"paperclip/v2/models/struct.Response.html\" title=\"struct paperclip::v2::models::Response\">Response</a>&lt;<a class=\"enum\" href=\"paperclip/v2/models/enum.Resolvable.html\" title=\"enum paperclip::v2::models::Resolvable\">Resolvable</a>&lt;S&gt;&gt;&gt;&gt;, <a class=\"enum\" href=\"paperclip/v2/models/enum.Resolvable.html\" title=\"enum paperclip::v2::models::Resolvable\">Resolvable</a>&lt;S&gt;&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"paperclip/v2/trait.Schema.html\" title=\"trait paperclip::v2::Schema\">Schema</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.resolve\" class=\"method\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/mod.rs.html#39\">source</a><h4 class=\"code-header\">pub fn <a href=\"paperclip/v2/models/struct.Api.html#tymethod.resolve\" class=\"fn\">resolve</a>(\n    self,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html\" title=\"struct std::sync::rwlock::RwLock\">RwLock</a>&lt;<a class=\"struct\" href=\"paperclip/v2/models/struct.Parameter.html\" title=\"struct paperclip::v2::models::Parameter\">Parameter</a>&lt;<a class=\"enum\" href=\"paperclip/v2/models/enum.Resolvable.html\" title=\"enum paperclip::v2::models::Resolvable\">Resolvable</a>&lt;S&gt;&gt;&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html\" title=\"struct std::sync::rwlock::RwLock\">RwLock</a>&lt;<a class=\"struct\" href=\"paperclip/v2/models/struct.Response.html\" title=\"struct paperclip::v2::models::Response\">Response</a>&lt;<a class=\"enum\" href=\"paperclip/v2/models/enum.Resolvable.html\" title=\"enum paperclip::v2::models::Resolvable\">Resolvable</a>&lt;S&gt;&gt;&gt;&gt;, <a class=\"enum\" href=\"paperclip/v2/models/enum.Resolvable.html\" title=\"enum paperclip::v2::models::Resolvable\">Resolvable</a>&lt;S&gt;&gt;, <a class=\"enum\" href=\"paperclip_core/error/enum.ValidationError.html\" title=\"enum paperclip_core::error::ValidationError\">ValidationError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Consumes this API schema, resolves the references and returns\nthe resolved schema.</p>\n<p>This walks recursively, collects the referenced schema objects,\nsubstitutes the referenced IDs with the pointer to schema objects\nand returns the resolved object or an error if it encountered one.</p>\n</div></details></div></details>",0,"paperclip::v2::ResolvableApi"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Api%3CP,+R,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#280\">source</a><a href=\"#impl-Api%3CP,+R,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P, R, S&gt; <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.path_parameters_map\" class=\"method\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#283-286\">source</a><h4 class=\"code-header\">pub fn <a href=\"paperclip/v2/models/struct.Api.html#tymethod.path_parameters_map\" class=\"fn\">path_parameters_map</a>(\n    path: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Gets the parameters from the given path template and calls\nthe given function with the parameter names.</p>\n</div></details></div></details>",0,"paperclip::v2::ResolvableApi","paperclip::v2::models::DefaultApiRaw"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Api%3CP,+R,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#impl-Clone-for-Api%3CP,+R,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P, R, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","paperclip::v2::ResolvableApi","paperclip::v2::models::DefaultApiRaw"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Api%3CP,+R,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#impl-Debug-for-Api%3CP,+R,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P, R, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","paperclip::v2::ResolvableApi","paperclip::v2::models::DefaultApiRaw"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Api%3CP,+R,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#impl-Default-for-Api%3CP,+R,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P, R, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","paperclip::v2::ResolvableApi","paperclip::v2::models::DefaultApiRaw"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Api%3CP,+R,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Api%3CP,+R,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, P, R, S&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    R: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","paperclip::v2::ResolvableApi","paperclip::v2::models::DefaultApiRaw"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Api%3CP,+R,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#impl-Serialize-for-Api%3CP,+R,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P, R, S&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"paperclip/v2/models/struct.Api.html\" title=\"struct paperclip::v2::models::Api\">Api</a>&lt;P, R, S&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    R: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/paperclip_core/v2/models.rs.html#173\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","paperclip::v2::ResolvableApi","paperclip::v2::models::DefaultApiRaw"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[19612]}