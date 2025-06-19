import razorpay
import os

razorpay_client = razorpay.Client(auth=(
    os.environ.get("RAZORPAY_API_KEY", ""),
    os.environ.get("RAZORPAY_API_SECRET", "")
))

def create_order(amount=50000):
    try:
        return razorpay_client.order.create(dict(
            amount=amount,
            currency="INR",
            payment_capture="1"
        ))
    except razorpay.errors.BadRequestError as e:
        print("Razorpay Error:", e)
        return None
