import 'package:flutter/material.dart';

class GreetingDialog extends StatelessWidget {
  final String name;

  const GreetingDialog({
    Key? key,
    required this.name,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('Hello $name!'),
      content: const Text('Welcome to this Flutter app created with Nx.'),
      actions: <Widget>[
        TextButton(
          child: const Text('Hey!'),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
      ],
    );
  }
}

greetPerson(BuildContext context, String name) {
  showDialog(context: context, builder: (context) => GreetingDialog(name: name));
}
