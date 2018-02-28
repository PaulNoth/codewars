public class Solution {

  public int solution(int number) {
    int result = 0;
	if (number > 3)
	{
		int min = 3;
		int count = (number - 1) / 3;
		int max = number - 1;
		while (max % 3 != 0)
		{
			max--;
		}
		int tempResult = count * (min + max) / 2;
		result += tempResult;
	}
	if (number > 5)
	{
		int min = 5;
		int count = (number - 1) / 5;
		int max = number - 1;
		while (max % 5 != 0)
		{
			max--;
		}
		int tempResult = count * (min + max) / 2;
		result += tempResult;
	}
	if (number > 15)
	{
		int min = 15;
		int count = (number - 1) / 15;
		int max = number - 1;
		while (max % 15 != 0)
		{
			max--;
		}
		int tempResult = count * (min + max) / 2;
		result -= tempResult;
	}

	return result;
  }
}