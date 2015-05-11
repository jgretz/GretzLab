module.exports = function (grunt) {
    var pushState = require('connect-pushstate'),
        gruntConfig;

    gruntConfig = {
        deploy: "release",
        pub: "../../GretzLabPub",

        files: {
            js: {
                vendor: [
                    "bower_components/jquery/dist/jquery.js",
                    "bower_components/angular/angular.js",
                    "bower_components/angular-route/angular-route.js",

                    "bower_components/bootstrap/assets/javascripts/bootstrap-sprockets.js",
                    "bower_components/bootstrap/assets/javascripts/bootstrap.js"
                ]
            }
        },

        coffee: {
            "default": {
                expand: true,
                cwd: "app/coffee",
                src: "**/*.coffee",
                dest: "<%= deploy %>/obj/angular/coffee",
                ext: ".js"
            }
        },

        ngconstant: {
            options: {
                name: "config",
                dest: "<%= deploy %>/obj/angular/config/config.js",
                wrap: true
            },

            dev: {
                constants: "app/config/dev.json"
            },

            dist: {
                constants: "app/config/dist.json"
            }
        },

        ngtemplates: {
            "default": {
                options: {
                    base: "app/templates",
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    },
                    module: "app"
                },

                src: "app/templates/**/*.html",
                dest: "<%= deploy %>/obj/angular/ngtemplates/template-cache.js"
            }
        },

        ngAnnotate: {
            "default": {
                expand: true,
                cwd: "<%= deploy %>/obj/angular",
                src: ["coffee/**/*.js", "config/config.js", "ngtemplates/**/*.js"],
                dest: "<%= deploy %>/obj/angular/ngannotate"
            }
        },

        uglify: {
            dev: {
                options: {
                    beautify: true,
                    compress: false,
                    mangle: false,
                    preserveComments: "all",
                    sourceMap: true,
                    sourceMapIncludeSources: true
                },

                src: ["<%= files.js.vendor %>", "<%= deploy %>/obj/angular/ngannotate/**/*.js"],
                dest: "<%= deploy %>/js/app.js"
            },

            dist: {
                options: {
                    compress: false,
                    mangle: true,
                    preserveComments: false
                },

                src: ["<%= files.js.vendor %>", "<%= deploy %>/obj/angular/ngannotate/**/*.js"],
                dest: "<%= deploy %>/js/app.js"
            }
        },

        sass: {
            options: {
                compass: false,
                noCache: true
            },

            dev: {
                options: {
                    style: "expanded"
                },

                src: "app/css/style.scss",
                dest: "<%= deploy%>/css/style.css"
            },

            dist: {
                options: {
                    style: "compressed"
                },

                src: "app/css/style.scss",
                dest: "<%= deploy %>/css/style.css"
            }
        },

        copy: {
            img: {
                expand: true,
                cwd: "app/img",
                src: "**/*",
                dest: "<%= deploy %>/img"
            },

            fonts: {
                expand: true,
                cwd: "app/fonts",
                src: "**/*",
                dest: "<%= deploy %>/fonts"
            },

            fonts_bootstrap: {
                expand: true,
                cwd: "bower_components/bootstrap/fonts",
                src: "**/*",
                dest: "<%= deploy %>/fonts"
            },

            html: {
                src: "app/index.html",
                dest: "<%= deploy %>/index.html"
            },

            pub: {
                expand: true,
                cwd: "release",
                src: ["**.*", "css/**.*", "fonts/**.*", "img/**.*", "js/**.*"],
                dest: "<%= pub %>"
            }
        },

        hashres: {
            dev: {
                options: {
                    fileNameFormat: "${name}.${ext}?${hash}",
                    renameFiles: false
                },

                src: ["css/style.css", "js/app.js"],
                dest: "<%= deploy %>/index.html"
            },

            dist: {
                src: ["css/style.css", "js/app.js"],
                dest: "<%= deploy %>/index.html"
            }
        },

        connect: {
            "default": {
                options: {
                    livereload: true,
                    port: 8000,
                    middleware: function (connect) {
                        return [pushState(), connect["static"]("release")];
                    }
                }
            }
        },

        open: {
            "default": {
                path: "http://127.0.0.1:8000"
            },

            iis: {
                path: "http://api.local"
            }
        },

        watch: {
            options: {
                livereload: true
            },

            coffee: {
                files: "app/coffee/**/*.coffee",
                tasks: ["coffee", "ngAnnotate", "uglify:<%= target %>", "hashres"]
            },

            config: {
                files: "app/config/**/*.json",
                tasks: ["ngconstant:<%= target %>", "ngAnnotate", "uglify:<%= target %>", "hashres:<%= target %>"]
            },

            templates: {
                files: "app/templates/**/*.html",
                tasks: ["ngtemplates", "ngAnnotate", "uglify:<%= target %>", "hashres:<%= target %>"]
            },

            vendor_js: {
                files: "<%= files.js.vendor %>",
                tasks: ["uglify:<%= target %>", "hashres:<%= target %>"]
            },

        	sass: {
        	  files: ["app/css/**/*.{scss,sass}"],
        	  tasks: ["sass:<%= target %>", "hashres:<%= target %>"]
        	},

            img: {
                files: "app/img/**/*",
                tasks: "copy:img"
            },

            html: {
                files: "app/index.html",
                tasks: ["uglify:<%= target %>", "sass:<%= target %>", "copy:html", "hashres:<%= target %>"]
            }
        },

        concurrent: {
        	default: [
        	   "coffee",
        	   "sass:<%=target%>",
                "copy:fonts",
                "copy:fonts_bootstrap",
                "copy:img",
                "copy:html"
        	]       	
        },

        clean: {
            default: {
                src: ["<%= deploy %>/obj/angular/*", "<%= deploy %>/css/*", "<%= deploy %>/fonts/*", "<%= deploy %>/img/*", "<%= deploy %>/js/*", "<%= deploy %>/index.html"]
            },
            
            pub: {
                src: ["<%= pub %>/css","<%= pub %>/fonts","<%= pub %>/img","<%= pub %>/js","<%= pub %>/index.html"],
                options: {
                    force: true
                }
            }
        },

        gitadd: {
            default: {
                options: {
                    cwd: "<%= pub %>",
                    all: true
                }
            }
        },

        gitcommit: {
            default: {
                options: {
                    cwd: "<%= pub %>",
                    message: "Publish",
                    allowEmpty: true
                }
            }
        },

        gitpush: {
            default: {
                options: {
                    cwd: "<%= pub %>",
                    verbose: true
                }
            }
        },

        build: {
            dev: [
                "clean:default",
                "concurrent",
                "ngconstant:dev",
                "ngtemplates",
                "ngAnnotate",
                "uglify:dev",
                "hashres:dev"                
            ]
        }
    };

    grunt.initConfig(gruntConfig);

    require("matchdep").filterAll(["grunt-*", "!grunt-cli"]).forEach(grunt.loadNpmTasks);

    grunt.registerMultiTask("build", "Build the project", function () {
        grunt.config.set("target", this.target);
        grunt.task.run(this.data);
    });

    grunt.registerTask("publish", "Build the project and run it in the default browser", function() {
        return grunt.task.run([
            "clean:pub",
            "copy:pub",

            "gitadd",
            "gitcommit",
            "gitpush"
        ]);
    });

    grunt.registerTask("run", "Build the project and run it in the default browser", function () {
        return grunt.task.run([
            "build:dev",
            "connect",
            "open:default",
            "watch"
        ]);
    });

    grunt.registerTask("default", ["run"]);
}
