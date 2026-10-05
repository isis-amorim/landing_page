export interface TourDate {
  id: number;
  date: string;
  day: string;
  month: string;
  city: string;
  venue: string;
  status: 'available' | 'soldout' | 'few';
}

export const tourDates: TourDate[] = [
  { id: 1, date: '15', day: 'Sex', month: 'NOV', city: 'Los Angeles, CA', venue: 'The Wiltern', status: 'soldout' },
  { id: 2, date: '17', day: 'Dom', month: 'NOV', city: 'San Francisco, CA', venue: 'The Warfield', status: 'few' },
  { id: 3, date: '20', day: 'Qua', month: 'NOV', city: 'Seattle, WA', venue: 'The Showbox', status: 'available' },
  { id: 4, date: '23', day: 'Sáb', month: 'NOV', city: 'Chicago, IL', venue: 'Riviera Theatre', status: 'available' },
  { id: 5, date: '25', day: 'Seg', month: 'NOV', city: 'Toronto, ON', venue: 'The Danforth', status: 'soldout' },
  { id: 6, date: '28', day: 'Qui', month: 'NOV', city: 'Nova York, NY', venue: 'Terminal 5', status: 'few' },
  { id: 7, date: '01', day: 'Dom', month: 'DEZ', city: 'Londres, UK', venue: 'O2 Forum Kentish Town', status: 'available' },
  { id: 8, date: '04', day: 'Qua', month: 'DEZ', city: 'Manchester, UK', venue: 'O2 Ritz', status: 'available' },
];
