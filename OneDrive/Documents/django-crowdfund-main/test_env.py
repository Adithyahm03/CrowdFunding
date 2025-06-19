from decouple import Config, RepositoryEnv

config = Config(repository=RepositoryEnv('.env'))
print("RAZORPAY_KEY_ID =", config("RAZORPAY_KEY_ID"))
