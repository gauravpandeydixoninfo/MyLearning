// C program to find the size of file
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*void filename_available()
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
*/
int main() 
{
    int i=1;
    char buff[55];
    long int byt;
    FILE *fp=NULL;
    while(i==1)
    {
        fp =fopen("latest_log.txt", "a+");
        fseek(fp, 0L, SEEK_END);

        byt = ftell(fp);
        if (byt > 50) 
        {
            printf("file size greater than 50\n");
            strcpy(buff, "mv latest_log.txt old_log.txt");
            printf("buff=%s\n", buff);
            system(buff);
            printf("cp command executed");
            //strcpy(buff, "rm latest_log.txt");
            //system(buff);
            //filename_available();
            printf("\nsystem command executed\n");
        } 
        else
        {
            printf("file size is %ld\n", byt);
            fprintf(fp, "writeen some content\n");
            break;
        }
    }
    return 0;
}
