import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-5">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: "100%", marginLeft: "60px" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            We respect your privacy and are committed to protecting your
            personal information.
          </p>
          <p>
            We collect basic information such as your name, email, address, and
            order details only to process your purchases and improve your
            experience.
          </p>
          <p>
            We never sell, rent, or share your data with anyone except trusted
            partners who help us deliver your orders and process payments.
          </p>
          <p>
            All payment transactions are secure and encrypted. We do not store
            your card details on our servers.
          </p>
          <p>
            We use cookies to enhance website performance and user experience.
            You may disable cookies through your browser settings.
          </p>
          <p>
            Your data is stored securely, and access is restricted to authorized
            personnel only.
          </p>
          <p>
            By using our website, you agree to this Privacy Policy. For any
            questions, feel free to contact our support team.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

// import React from "react";
// import Layout from "./../components/Layout/Layout";

// const Policy = () => {
//   return (
//     <Layout>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src="/images/contact.jpg"
//             alt="contactus"
//             style={{ width: "100%",padding:"5%",marginLeft:"5%"}}
//           />
//         </div>
//         <div className="col-md-4">
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Policy;
