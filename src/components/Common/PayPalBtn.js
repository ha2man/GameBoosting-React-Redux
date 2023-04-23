import { useEffect } from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const style = {"layout":"vertical"};

const ButtonWrapper = ({ amount, currency, showSpinner, disablity, onSubmit }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    // useEffect(() => {
    //     dispatch({
    //         type: "resetOptions",
    //         value: {
    //             ...options,
    //             currency: currency,
    //         },
    //     });
    // }, [currency, showSpinner]);

    const onSuccess = () => {
        console.log("success");
    }

    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={disablity}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        onSubmit();
                    });
                }}
            />
        </>
    );
}

export default ButtonWrapper;