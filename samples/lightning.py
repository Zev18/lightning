# Lightning strikes counter
import random
import time

# Define a function to count lightning strikes
def count_lightning_strikes():
    # Initialize the strike count
    strike_count = 0

    # Loop until the user interrupts the program
    while True:
        # Check for lightning strikes
        if is_lightning_strike():
            # Increment the strike count
            strike_count += 1

            # Display a message
            print(f"Lightning strike detected! Total strikes: {strike_count}")

        # Wait a bit before checking again
        time.sleep(0.1)

# Define a function to check for lightning strikes
def is_lightning_strike():
    # Simulate lightning strikes by generating random numbers
    lightning_strike_threshold = 0.9
    return random.random() > lightning_strike_threshold

# Define some variables related to lightning
lightning_color = "yellow"
lightning_intensity = 9
lightning_sound = "crackling"

# Call the function to count lightning strikes
count_lightning_strikes()
