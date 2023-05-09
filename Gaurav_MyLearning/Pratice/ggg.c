/*int main() val = atoi(buff);
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
}*/
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
  
int main(int argc, char *argv[])
{
    char buff[5];
    int val;
    //strcpy(buff, argv[1]);
    // val = atoi(buff);
    if(argc < 2)
    {
        printf("please enter a valid number\n");
        printf("For Rollover : 1\n");
        printf("For Backup : 2\n");
        return -1;
    }

    printf(" value of argv[0]=%s\n",argv[0]);
    printf(" value of argv[1]=%s\n",argv[1]);
    strcpy(buff, argv[1]);
    printf("value of buff=%s\n", buff);
    val = atoi(buff);
    printf(" value= %d\n", val);
    FILE *fp;
    

    switch (val)
    {
        case 1:    
            fp =fopen("pandey.txt", "a+");
            //fseek(fp, 0L, SEEK_END);
            fprintf(fp, "***gaurav this side not in roleup mode\n");
            fclose(fp);
            break;

        case 2:    
            fp =fopen("pandey.txt", "a+");
            fseek(fp, 0L, SEEK_END);

            printf("%ld poistion of poiinter\n", ftell(fp));
            fprintf(fp, "hellow ***pandey*** this side not in roleup mode\n");
            fclose(fp);
            break;

         default :
            printf("please enter a valid number\n");
    }
    printf("Done with file\n");
    return 0;
}

     


