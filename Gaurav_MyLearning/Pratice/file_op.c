// C program to find the size of file
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void filename_available()
{   
    FILE * ls_cmd = popen("find . -type f -name 'gaurav*.txt' | grep -o -E '[0-9]+' | sort -rn | head -n 1", "r");
    if(ls_cmd == NULL)
    {
        fprintf(stderr, "popen(3) error");
        exit;
    }
    else
    { 
        char buff[15];
        size_t n;
        while ((n = fread(buff, 1, sizeof(buff) - 1, ls_cmd)) > 0)
        {
            buff[n] = '\0';
        }

        int val;
        char filename[30];
        val = atoi(buff);
        val = val + 1;
        sprintf(filename, "gaurav%d.txt", val);
        char filename1[100];
        sprintf(filename1, "mv gaurav.txt %s", filename);
        system(filename1);
   }
}

int main() 
{
    int i=1;
    long int byt;
    FILE *fp=NULL;
    while( i==1 )
    {
        fp =fopen("gaurav.txt", "a+");
        fseek(fp, 0L, SEEK_END);

        byt = ftell(fp);
        if (byt > 50) 
        {
            filename_available();
            printf("\nsystem command executed\n");
        } 
        else
        {
        printf("file size is %ld\n", byt);
        fprintf(fp, "writeen some content\n");
        i=0;
        }
    }
    return 0;
}
