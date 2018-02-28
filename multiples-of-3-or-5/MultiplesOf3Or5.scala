object MultiplesOf3Or5 {   
  def solution(number: Long): Long = 
    (3L until number).filter(i => i % 3L == 0L || i % 5L == 0L).sum
}