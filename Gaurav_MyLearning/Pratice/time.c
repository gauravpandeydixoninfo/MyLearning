#include <time.h>
#include <stdio.h>
#include <string.h>

#define print_log(f_, ...) printf("[%s] [%s] [%s] [%d] ", timestamp(), __FILE__, __func__, __LINE__), printf((f_), ##__VA_ARGS__), printf("\n")

char * timestamp(){
    time_t now = time(NULL);
    char * time = asctime(gmtime(&now));
    time[strlen(time)-1] = '\0';    // Remove \n
    return time;
}

int main(int argc, char* argv[]) 
{
    print_log("Hello gaurav this side");
    print_log("%s%d","mokumus",1996);

    return 0;
}
