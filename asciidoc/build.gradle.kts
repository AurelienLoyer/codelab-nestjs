plugins {
    id("org.gradle.presentation.asciidoctor")
}

presentation {
    githubUserName.set("melix")
    githubRepoName.set("gradle-presentation-template")
}

tasks.register("release", Copy::class.java) {
    from("./build/asciidoc/revealjs")
    into("../docs/slides")
}

afterEvaluate {
  tasks["release"].dependsOn("asciidoctor")
}