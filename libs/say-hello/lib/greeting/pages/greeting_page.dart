import 'package:flutter/material.dart';
import 'package:say_hello/say_hello.dart';

class GreetingPage extends StatefulWidget {
  const GreetingPage({Key? key}) : super(key: key);

  @override
  State<GreetingPage> createState() => _GreetingPageState();
}

class _GreetingPageState extends State<GreetingPage> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  String name = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Say Hello'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              TextFormField(
                decoration: const InputDecoration(
                  labelText: 'Name',
                ),
                validator: (String? n) => n != null && n.isNotEmpty ? null : 'Name is required',
                onChanged: (n) => setState(() => name = n),
              ),
              const SizedBox(height: 16),
              TextButton(
                child: const Text(
                  '👋',
                  style: TextStyle(fontSize: 40),
                ),
                onPressed: () {
                  final isValid = _formKey.currentState!.validate();

                  if (!isValid) {
                    return;
                  }

                  greetPerson(context, name);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
