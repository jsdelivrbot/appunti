import 'package:EasyList/models/product.dart';
import 'package:EasyList/models/user.dart';
import 'package:scoped_model/scoped_model.dart';

mixin ConnectedProducts on Model {
  List<Product> products = [];
  int selProductIndex;
  User authenticatedUser;

  void addProduct(
      String title, String description, String image, double price) {
    final Product newProduct = Product(
        title: title,
        description: description,
        image: image,
        price: price,
        userEmail: authenticatedUser.email,
        userId: authenticatedUser.id);
    products.add(newProduct);
    selProductIndex = null;
    notifyListeners();
  }
}
