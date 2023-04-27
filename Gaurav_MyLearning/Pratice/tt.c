#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a;

    printf("Please enter a number:\n");
    scanf("%d",&a);
    printf("Your number is: %d\n",a);
    system("echo %d",a);
}
