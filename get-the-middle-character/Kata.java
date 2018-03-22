class Kata {
    public static String getMiddle(String word) {
        if (word.length() % 2 == 0) {
            int half = word.length() / 2;
            return word.substring(half - 1, half + 1);
        } else {
            int half = word.length() / 2;
            return word.substring(half, half + 1);
        }
    }
}