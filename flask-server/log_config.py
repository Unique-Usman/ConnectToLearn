import logging

# Set up logging configuration
logging.basicConfig(
    level=logging.ERROR,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("app.log"),  # Log messages to a file (app.log)
    ],
)

# Optionally, define additional loggers and handlers here
