#include <stdlib.h>
#include <stdio.h>
int main()
{
    FILE *pointer1;
    pointer1=fopen("file.txt", "a");
        if(pointer1 == NULL)
        {
            printf("\nfile pointer not able to open\n");
            return 0;
        }
        else
        {
          //  fprintf(pointer1,"gaurav pandey");
            fprintf(pointer1,"\nmy name is not khan\n");
            fclose(pointer1);
            return 0;
        }
}

