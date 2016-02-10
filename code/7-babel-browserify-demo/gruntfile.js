module.exports = function(grunt){

  grunt.initConfig({
    watch: {
      apps: {
        files: ["clientApp/src/**/*.js"],
        tasks: ["babel", "browserify"]
      },

    },

    babel: {
      options: {
        sourceMap: true
      },
      build: {
        files: [{
          expand: true,
          cwd: "clientApp/src",
          src: ["**/*.js"],
          dest: "clientApp/build/"
        }]
      }
    },

    browserify: {
      options:{
        browserifyOptions: {
          debug: true
        }
      },
      entries: {
        files: {
          "public/javascripts/index.js": "clientApp/build/index.js"
        },
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("default", ["watch"]);

};
