
class UserModel {
  final String title;
  UserModel(
      {required this.title});

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
        title: json['title']);
  }
}
