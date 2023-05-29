package main

import (
	"encoding/csv"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

func main() {
	// Request the Quizlet flashcard set URL
	fmt.Print("Enter Quizlet flashcard set URL: ")
	var url string
	fmt.Scanln(&url)

	// Send a GET request to the URL and get the response
	res, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

	// Load the response body into a goquery document
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	// Open a CSV file for writing
	file, err := os.Create("flashcards.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	// Create a CSV writer
	writer := csv.NewWriter(file)
	defer writer.Flush()

	// Find every card in the flashcard set
	doc.Find(".SetPageTerm-contentWrapper").Each(func(i int, card *goquery.Selection) {

		// Get the term and definition of the card
		term := strings.TrimSpace(card.Find(".SetPageTerm-wordText").Text())
		fmt.Println("hello")
		definition := strings.TrimSpace(card.Find(".SetPageTerm-definitionText").Text())
		fmt.Println("hello")

		// Write the term and definition to the CSV file
		err := writer.Write([]string{term, definition})
		if err != nil {
			log.Fatal(err)
		}
	})

	fmt.Println("Flashcards saved in flashcards.csv.")
}
