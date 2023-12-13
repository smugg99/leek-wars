import { ComponentTemplate } from '@/model/component'

export const COMPONENTS: {[key: string]: ComponentTemplate} = Object.freeze({
  '1': { id: 1, name: 'core', stats: [ [ 'cores', 4 ] ], template: 290 },
  '2': { id: 2, name: 'core2', stats: [ [ 'frequency', 20 ], [ 'cores', 8 ] ], template: 291 },
  '3': { id: 3, name: 'core3', stats: [ [ 'frequency', 30 ], [ 'cores', 12 ], [ 'tp', 1 ] ], template: 292 },
  '4': { id: 4, name: 'battery', stats: [ [ 'resistance', 10 ], [ 'frequency', 10 ], [ 'tp', 1 ] ], template: 293 },
  '5': { id: 5, name: 'iron_plate', stats: [ [ 'life', 50 ], [ 'resistance', 40 ] ], template: 294 },
  '6': { id: 6, name: 'amazonite_plate', stats: [ [ 'life', 150 ], [ 'resistance', 60 ] ], template: 295 },
  '7': { id: 7, name: 'obsidian_plate', stats: [ [ 'life', 300 ], [ 'strength', 20 ], [ 'resistance', 80 ] ], template: 296 },
  '8': { id: 8, name: 'spring', stats: [ [ 'strength', 20 ], [ 'agility', 50 ] ], template: 297 },
  '9': { id: 9, name: 'copper_spring', stats: [ [ 'strength', 40 ], [ 'agility', 60 ] ], template: 298 },
  '10': { id: 10, name: 'elinvar_spring', stats: [ [ 'life', 100 ], [ 'agility', 80 ], [ 'strength', 30 ], [ 'resistance', 20 ], [ 'mp', 1 ] ], template: 299 },
  '11': { id: 11, name: 'ssd', stats: [ [ 'life', 80 ], [ 'wisdom', 80 ], [ 'science', 30 ], [ 'ram', 2 ], [ 'tp', 1 ] ], template: 300 },
  '12': { id: 12, name: 'nuclear_core', stats: [ [ 'life', -250 ], [ 'science', 40 ], [ 'frequency', 40 ], [ 'tp', 4 ] ], template: 301 },
  '13': { id: 13, name: 'fan', stats: [ [ 'frequency', 40 ] ], template: 302 },
  '14': { id: 14, name: 'sdcard', stats: [ [ 'life', 40 ], [ 'wisdom', 60 ], [ 'ram', 1 ] ], template: 303 },
  '15': { id: 15, name: 'cd', stats: [ [ 'wisdom', 40 ] ], template: 304 },
  '16': { id: 16, name: 'neural_core', stats: [ [ 'science', 60 ], [ 'frequency', 20 ], [ 'cores', 2 ] ], template: 305 },
  '17': { id: 17, name: 'neural_core_pro', stats: [ [ 'science', 80 ], [ 'frequency', 30 ], [ 'cores', 4 ], [ 'tp', 1 ] ], template: 306 },
  '18': { id: 18, name: 'power_supply', stats: [ [ 'frequency', 20 ], [ 'science', 10 ], [ 'tp', 2 ] ], template: 307 },
  '19': { id: 19, name: 'chiyembekezo', stats: [ [ 'life', 200 ], [ 'agility', 30 ], [ 'magic', 80 ], [ 'tp', 1 ] ], template: 308 },
  '20': { id: 20, name: 'uzoma', stats: [ [ 'life', 100 ], [ 'agility', 40 ], [ 'magic', 60 ] ], template: 309 },
  '21': { id: 21, name: 'kirabo', stats: [ [ 'life', 60 ], [ 'strength', 10 ], [ 'resistance', 30 ] ], template: 310 },
  '22': { id: 22, name: 'limbani', stats: [ [ 'life', 30 ], [ 'strength', 40 ], [ 'wisdom', 10 ] ], template: 311 },
  '23': { id: 23, name: 'thokozani', stats: [ [ 'strength', 50 ], [ 'wisdom', 50 ], [ 'agility', 50 ], [ 'resistance', 50 ], [ 'science', 50 ], [ 'magic', 50 ] ], template: 312 },
  '24': { id: 24, name: 'ram', stats: [ [ 'ram', 4 ] ], template: 313 },
  '25': { id: 25, name: 'ram2', stats: [ [ 'life', 40 ], [ 'ram', 6 ], [ 'science', 20 ] ], template: 314 },
  '26': { id: 26, name: 'ram3', stats: [ [ 'life', 80 ], [ 'ram', 8 ], [ 'tp', 1 ] ], template: 315 },
  '27': { id: 27, name: 'motherboard', stats: [ [ 'science', 40 ], [ 'frequency', 10 ], [ 'cores', 2 ], [ 'ram', 2 ] ], template: 316 },
  '28': { id: 28, name: 'propulsor', stats: [ [ 'mp', 1 ], [ 'agility', 20 ], [ 'resistance', -30 ] ], template: 317 },
  '29': { id: 29, name: 'propulsor2', stats: [ [ 'mp', 2 ], [ 'agility', 40 ], [ 'resistance', -40 ] ], template: 318 },
  '30': { id: 30, name: 'morus', stats: [ [ 'life', 60 ], [ 'magic', 40 ], [ 'wisdom', 20 ] ], template: 319 },
  '31': { id: 31, name: 'hylocereus', stats: [ [ 'life', 500 ], [ 'wisdom', 40 ], [ 'magic', 40 ], [ 'tp', 1 ] ], template: 320 },
  '32': { id: 32, name: 'apple', stats: [ [ 'life', 50 ] ], template: 321 },
  '33': { id: 33, name: 'nephelium', stats: [ [ 'life', 70 ], [ 'strength', 60 ], [ 'agility', 30 ], [ 'science', 20 ] ], template: 322 },
  '34': { id: 34, name: 'blue_mango', stats: [ [ 'wisdom', 30 ], [ 'agility', 50 ], [ 'science', 70 ] ], template: 323 },
  '35': { id: 35, name: 'watercooling', stats: [ [ 'frequency', 60 ] ], template: 324 },
  '36': { id: 36, name: 'strawberry', stats: [ [ 'life', 200 ], [ 'agility', 30 ] ], template: 365 },
  '37': { id: 37, name: 'chestnut', stats: [ [ 'life', 160 ], [ 'strength', 80 ], [ 'resistance', 40 ], [ 'tp', 1 ] ], template: 366 },
  '38': { id: 38, name: 'blue_plum', stats: [ [ 'life', 130 ], [ 'science', 50 ], [ 'agility', 50 ], [ 'mp', 1 ] ], template: 369 },
  '39': { id: 39, name: 'kiwi', stats: [ [ 'wisdom', 20 ], [ 'tp', -1 ], [ 'mp', 1 ] ], template: 370 },
  '40': { id: 40, name: 'quince', stats: [ [ 'life', 80 ], [ 'wisdom', 40 ], [ 'resistance', 40 ], [ 'tp', 1 ] ], template: 371 },
  '41': { id: 41, name: 'onion', stats: [ [ 'life', 60 ], [ 'strength', 60 ], [ 'science', -60 ], [ 'magic', 60 ] ], template: 372 },
  '42': { id: 42, name: 'orange', stats: [ [ 'resistance', 20 ], [ 'wisdom', 20 ] ], template: 373 },
  '43': { id: 43, name: 'soursop', stats: [ [ 'strength', 50 ], [ 'frequency', 20 ], [ 'mp', 1 ] ], template: 374 },
  '44': { id: 44, name: 'hokajin', stats: [ [ 'life', 70 ], [ 'agility', 70 ], [ 'resistance', 70 ], [ 'magic', 70 ] ], template: 375 },
  '45': { id: 45, name: 'pear', stats: [ [ 'life', -500 ], [ 'tp', 2 ] ], template: 376 },
  '46': { id: 46, name: 'motherboard2', stats: [ [ 'science', 20 ], [ 'frequency', 20 ], [ 'cores', 3 ], [ 'ram', 3 ], [ 'tp', 1 ] ], template: 381 },
  '47': { id: 47, name: 'motherboard3', stats: [ [ 'wisdom', 40 ], [ 'science', 60 ], [ 'frequency', 30 ], [ 'cores', 4 ], [ 'ram', 4 ], [ 'tp', 2 ] ], template: 382 },
  '48': { id: 48, name: 'switch', stats: [ [ 'life', -200 ], [ 'wisdom', 50 ], [ 'science', 50 ] ], template: 383 },
  '49': { id: 49, name: 'switch2', stats: [ [ 'life', -400 ], [ 'wisdom', 70 ], [ 'science', 70 ], [ 'tp', 1 ] ], template: 384 },
  '50': { id: 50, name: 'rgb', stats: [ [ 'life', 1 ] ], template: 385 },
  '52': { id: 52, name: 'recovery_core', stats: [ [ 'cores', 19 ] ], template: 406 },
  '53': { id: 53, name: 'recovery_ram', stats: [ [ 'ram', 14 ] ], template: 407 }
})