import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { focusHandling } from "cruip-js-toolkit";

// IMPORT PAGES ======= CLIENT SIDE
// import Shop from "./pages/shop/Shop";
import Cart from "./pages/shop/Cart";
import Checkout from "./pages/shop/Checkout";
import CheckoutTemp from "./pages/shop/CheckoutTemp";
import Transfer from "./pages/shop/Transfer";
import PaymentVerification from "./pages/shop/PaymentVerification.jsx";
import Register from "./pages/shop/Register";
import UserLogin from "./pages/shop/Login";
import ForgotPassword from "./pages/shop/ForgotPassword";
import ResetPassword from "./pages/shop/ResetPassword";
import Products from "./pages/shop/Products";
import ProductDetail from "./pages/shop/ProductDetail";
// import AddProduct from "./pages/dashboard/AddProduct";
import Notification from "./pages/shop/Notification";
import VerificationPage from "./pages/shop/VerificationUser";
import Test from "./pages/shop/Test";
import TestModal from "./pages/shop/TestModal";
import MyAccount from "./pages/shop/MyAccount";
import WalletPayment from "./pages/shop/WalletPayment";
import InvoiceDetails from "./pages/shop/InvoiceDetails";
import TransferWithId from "./pages/shop/TransferWithId";

// IMPORT PAGES ======= ADMIN SIDE
// import Dashboard from "./pages/dashboard/Dashboard";

// IMPORT CONTEXTS
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

// IMPORT STYLES
import "./assets/scss/styles.scss";
// import "./assets/css/style.scss";
// import Trypdf from "./pages/shop/Trypdf";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <div>
            {/* ============================== CLIENT SIDE ===============================  */}
            <Route
              path='/product/:product_id'
              exact
              component={ProductDetail}
            />
            <Route path='/' exact component={Products} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={UserLogin} />
            <Route path='/verification/' exact component={VerificationPage} />
            <Route path='/forgotpassword' exact component={ForgotPassword} />
            <Route path='/resetpassword' exact component={ResetPassword} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/cart/checkout' exact component={CheckoutTemp} />
            <Route path='/cart/checkout2' exact component={Checkout} />
            <Route path='/cart/transfer/' exact component={Transfer} />
            <Route
              path='/cart/transfer/:invoice_head_id'
              exact
              component={TransferWithId}
            />
            <Route
              path='/cart/wallet/:invoice_head_id?'
              exact
              component={WalletPayment}
            />
            <Route path='/cart/verify' exact component={PaymentVerification} />
            <Route path='/test' exact component={Test} />
            <Route path='/testmodal' exact component={TestModal} />
            <Route path='/my-account' exact component={MyAccount} />
            <Route
              path='/my-account/notifications'
              exact
              component={Notification}
            />
            <Route
              path='/purchases/invoice/:invoice_id'
              exact
              component={InvoiceDetails}
            />
            {/* ============================== ADMIN SIDE ===============================  */}
            {/* <Route path='/admin/products/add' exact component={AddProduct} />
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/users' exact />
            <Route path='/users/detail/:user_id?' exact />
            <Route path='/products' exact />
            <Route path='/transactions' exact />
            <Route path='/sales/report' exact />
            <Route path='/shipping/:invoice_id' exact />
            <Route path='/invoice/:invoice_id' exact />
            <Route path='/invoice/verify/:invoice_id' exact />
            <Route path='/stock-transfer' exact /> */}
          </div>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
