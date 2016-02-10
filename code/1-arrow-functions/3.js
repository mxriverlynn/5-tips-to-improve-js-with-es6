var UserWorkflow = {

  addNewUser: function() {

    // arrow function!
    this.getUserDetail((userDetail) => {

      var user = new User(userDetail);

      // THIS!!!! :D :D :D
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
