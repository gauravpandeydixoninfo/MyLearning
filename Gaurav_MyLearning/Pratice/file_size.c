
        // C program to find the size of file
#include <stdio.h>
#include <string.h>

long int findSize(char file_name[])
{    
    char filename[20]; 
	// opening the file in read mode
    // char temp;
    // system("find . -type f -name 'a*.txt' | grep -o -E '[0-9]+' | sort -rn | head -n 1");
	FILE* fp = fopen(file_name, "a+");
    // printf("value of temp=%c \n", temp);
    // int strlen= str[strlen(str) - 1] = '\0'
    // char str1[]={"a.txt"};
    // int length= strlen(str1);
    // printf("\n string length of a.txt=%ld \n", strlen(str1));
    // str1[length]='2';
    // int temp = (int)str1[length];
    // str1[length+1]=temp+1;
    // printf("\n value returned  by temp=%d", temp);
    // printf("\n calue of string after change is=%s\n", str1);

    int counter=1;
	// checking if the file exist or not
	if (fp == NULL)
    {
		printf("File Not Found!\n");
		return -1;
	}
    else 
    {
       FILE *fp1 = fp;
     tag:fseek(fp1, 0L, SEEK_END);
           
       long int byt = ftell(fp1);
       if(byt>25)
       {
           counter++;
           sprintf(filename,"a%d.txt",counter);
           printf("name of new file=%s\n", filename);
           fp1=fopen(filename, "a+");
           fseek(fp1, 0L, SEEK_END);
           byt=ftell(fp1);
           if(byt>50)
           {
                goto tag;
           }
           else
           {
                fp=fp1;
           }
       }

       // value = 1;
       // new_file(file_name, value)
       //system("mv a.txt a1.txt");
	  // fp = fopen(file_name, "a+");
       // fp=fopen("gaurav.txt", "a+");
    }    

    fprintf(fp, "Gaurav pandey is here\n");
    fseek(fp, 0L, SEEK_END);

	// calculating the size of the file
	long int res = ftell(fp);

	// closing the file
	fclose(fp);

	return res;
}

// Driver code
int main()
{
	char file_name[] = { "a1.txt" };
	long int res = findSize(file_name);
	if (res != -1)
		printf("Size of the file is %ld bytes \n", res);
	return 0;
}


