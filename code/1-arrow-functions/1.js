var UserWorkflow = {

  addNewUser: function() {
    this.getUserDetail(function(userDetail){

      var user = new User(userDetail);
      // use of "this" ... will it work?
      this.showUserInfo(user);

    });
  },

  showUserInfo: function(user){
    console.log("User Info");
    console.log("---------");
    console.log("Name:", user.firstName, user.lastName);
    console.log("Email:", user.email);
    console.log("");
  },

  // simulate async work
  getUserDetail: function(cb){
    var detail = {
      firstName: "foo",
      lastName: "bar",
      email: "foo.bar@example.com"
    };

    setTimeout(function(){
      cb(detail);
    }, 50);
  }
};
