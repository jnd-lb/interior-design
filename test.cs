using System;

class GuessingGame {
    static void Main() {
        Random random = new Random();
        int numToGuess = random.Next(1, 100);
        int numGuesses = 0;

        Console.WriteLine("I'm thinking of a number between 1 and 100. Can you guess it?");

        while (true) {
            Console.Write("Enter your guess: ");
            int guess = int.Parse(Console.ReadLine());
            numGuesses++;
            if ((guess < numToGuess) && (numGuesses < 10)) {
                Console.WriteLine("Low. Try again.");
            } else if (guess > numToGuess & numGuesses < 10) {
                Console.WriteLine("High. Try again.");
            } else if  ((guess == numToGuess) && (numGuesses < 10)){
                Console.WriteLine($"Congratulations! You guessed the number in {numGuesses} guesses.");
            }else {
                Console.WriteLine("You Lost!");
                break;
            }
            }
        }
    }
}