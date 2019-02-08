#include <stdio.h>

int main(void)
{
	int x = 50;
	float y = 123456789.2222222;
	double z = 123456789.2222222;
	printf("x = %d\n", x);
	printf("x memory size : %d\n", sizeof(x));
	
	printf("y = %.2f\n", y);
		printf("y memory size : %d\n", sizeof(y));
	printf("z = %.2f\n", z);
		printf("z memory size : %d\n", sizeof(z));
	return 0;
}
