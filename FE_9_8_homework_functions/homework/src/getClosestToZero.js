function getClosestToZero() {
   return [... arguments].sort(function (a, b) {
       return Math.abs(a) > Math.abs(b) ? 1 : -1;
   })[0];
}