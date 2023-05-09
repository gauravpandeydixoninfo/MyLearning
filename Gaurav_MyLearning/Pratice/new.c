// C program to read particular bytes
// from the existing file
#include <stdio.h>
#include <stdlib.h>
  
// Maximum range of bytes
#define MAX 1000
  
// Filename given as the command
// line argument
int main(int argc, char* argv[])
{
    // Pointer to the file to be
    // read from
    FILE* fptr1;
    char c;
    printf("hellow\n");
  
    // Stores the bytes to read
    char str[MAX];
    int i = 0, j, from, to;
  
    // If the file exists and has
    // read permission
    fptr1 = fopen("pandey.txt", "r");
  
    if (fptr1 == NULL) {
        printf("fptr=null\n");
        return 1;
    }
  
    // Input from the user range of
    // bytes inclusive of from and to
    printf("Read bytes from: ");
    scanf("%d", &from);
    printf("Read bytes upto: ");
    scanf("%d", &to);
  
    // Loop to read required byte
    // of file
    for (i = 0, j = 0; i <= to
                       && c != EOF;
         i++) {
  
        // Skip the bytes not required
        if (i >= from) {
            str[j] = c;
            j++;
        }
  
        // Get the characters
        c = fgetc(fptr1);
    }
  
    // Print the bytes as string
    printf("%s", str);
  
    // Close the file
    fclose(fptr1);
  
    return 0;
}
