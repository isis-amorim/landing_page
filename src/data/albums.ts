export interface Album {
  id: number;
  title: string;
  year: string;
  type: string;
  description: string;
  tracks: number;
  image: string;
  accent: string;
  highlights: string[];
}

export const albums: Album[] = [
  {
    id: 1,
    title: 'Chase Atlantic',
    year: '2017',
    type: 'Álbum de Estreia',
    description:
      'A estreia que começou tudo. Uma jornada que mistura gêneros através de paisagens sonoras de R&B alternativo, rock e eletrônica que apresentou ao mundo o som inconfundível do Chase Atlantic.',
    tracks: 14,
    image: 'https://images.pexels.com/photos/5764281/pexels-photo-5764281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-rose-600 to-red-900',
    highlights: ['Church', 'Into It', 'Friends', 'Trigger'],
  },
  {
    id: 2,
    title: 'Phases',
    year: '2019',
    type: 'Álbum de Estúdio',
    description:
      'Uma evolução mais sombria e refinada. Phases mergulha em temas de amor, perda e autodescoberta, misturando produção atmosférica com letras cruas e honestas que ressoam de forma visceral.',
    tracks: 14,
    image: 'https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-amber-600 to-orange-900',
    highlights: ['Into It', 'What U Want', 'Too Late', 'Heaven and Back'],
  },
  {
    id: 3,
    title: 'Beauty in Death',
    year: '2021',
    type: 'Álbum de Estúdio',
    description:
      'Seu disco mais ambicioso até agora. Beauty in Death é uma exploração cinematográfica de mortalidade, desejo e renascimento — empurrando os limites de seu som para novos territórios assombrados.',
    tracks: 14,
    image: 'https://images.pexels.com/photos/31805824/pexels-photo-31805824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-cyan-600 to-blue-900',
    highlights: ['Slow Down', 'Cassie', 'OUT THE ROOF', 'Numb to the Feeling'],
  },
  {
    id: 4,
    title: 'Lost in Heaven',
    year: '2024',
    type: 'Lançamento Mais Recente',
    description:
      'O capítulo mais novo. Lost in Heaven encontra a banda em seu momento mais criativo e expansivo, fundindo texturas ricas de sintetizadores com sua energia característica de dark pop para uma experiência que parece íntima e infinita ao mesmo tempo.',
    tracks: 17,
    image: 'https://images.pexels.com/photos/908965/pexels-photo-908965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-violet-500 to-fuchsia-900',
    highlights: ['DO IT FOR ME', 'DIE FOR ME', 'EASY', 'RICH KIDS'],
  },
];
