import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Book = { 
  id: number; 
  title: string; 
  author: string; 
  category: string; 
  price: number; 
  rating: number; 
  cover: string; 
  badge?: string; 
  description: string 
};

@Component({
   selector: 'app-root', 
   standalone: true, 
   imports: [CommonModule, FormsModule], 
   templateUrl: './app.component.html' })

export class AppComponent {
  searchTerm = '';
  activeCategory = 'All books';
  cartCount = 0;
  cartTotal = 0;
  notice = '';
  assistantQuestion = '';
  assistantAnswer = 'Tell me what you enjoy reading and I’ll suggest a place to start.';
  readonly categories = ['All books', 'Technology', 'Fiction', 'Business', 'Personal growth'];
  readonly books: Book[] = [
    { id: 1, title: 'The Creative Act', author: 'Rick Rubin', category: 'Personal growth', price: 499, rating: 4.9, cover: '🎨', badge: 'Bestseller', description: 'A thoughtful guide to creativity, curiosity and making meaningful work.' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', category: 'Personal growth', price: 399, rating: 4.8, cover: '🌱', badge: 'Popular', description: 'Build better habits through small, practical changes that compound over time.' },
    { id: 3, title: 'The Pragmatic Programmer', author: 'David Thomas & Andrew Hunt', category: 'Technology', price: 699, rating: 4.8, cover: '💻', description: 'Timeless techniques for writing resilient, maintainable software.' },
    { id: 4, title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', category: 'Fiction', price: 449, rating: 4.6, cover: '🌅', badge: 'Staff pick', description: 'A moving novel about friendship, creativity and the worlds we build.' },
    { id: 5, title: 'The Psychology of Money', author: 'Morgan Housel', category: 'Business', price: 349, rating: 4.7, cover: '🪙', description: 'Short stories about how people think about wealth, risk and decisions.' },
    { id: 6, title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', category: 'Technology', price: 899, rating: 4.9, cover: '🧩', badge: 'For builders', description: 'A deep introduction to the systems behind reliable data applications.' }
  ];

  get filteredBooks(): Book[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.books.filter(book => (this.activeCategory === 'All books' || book.category === this.activeCategory) && (!term || `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(term)));
  }

  chooseCategory(category: string): void { this.activeCategory = category; }

  addToCart(book: Book): void { this.cartCount++; this.cartTotal += book.price; this.notice = `Added “${book.title}” to your bag.`; }
  
  askAssistant(): void {
    const q = this.assistantQuestion.toLowerCase();
    if (!q.trim()) { this.assistantAnswer = 'Try asking for a book about coding, habits, money or fiction.'; return; }
    const match = this.books.find(b => `${b.title} ${b.author} ${b.category} ${b.description}`.toLowerCase().includes(q) || q.split(/\s+/).some(word => word.length > 3 && `${b.title} ${b.author} ${b.category} ${b.description}`.toLowerCase().includes(word)));
    this.assistantAnswer = match ? `Try “${match.title}” by ${match.author}. ${match.description}` : 'For a useful starting point, try Atomic Habits for routines, The Pragmatic Programmer for software craft, or The Psychology of Money for personal finance.';
  }
}
