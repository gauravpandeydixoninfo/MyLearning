#include "shm_sem.h"

FILE *fptr = NULL;

int main()
{

	int start = 1;
	void *shm = NULL;
	struct sh_dat *sh_ptr;
	char buffer[TEXT_SZ];
	int shmid, semid;

    fptr = fopen("mylog.txt", "a+");

	shmid = shmget((key_t)1234, sizeof(struct sh_dat), 0666 | IPC_CREAT);
	if(shmid == -1)
	{
		print_log("shmget failed");
		exit(EXIT_FAILURE);
	}
    sleep(1);
	print_log("Shared Memory created\033[0m");
	
	semid = semget((key_t)1235, 1, 0666 | IPC_CREAT);
	if(semid == -1)
	{
		print_log("semget failed");
		shmctl(shmid, IPC_RMID, NULL);
		exit(EXIT_FAILURE);
	}
    sleep(1);
	print_log("Semaphore created");

	/* Initially making the semaphore available */
	/* Initially making the semaphore available */
	if(semctl(semid, 0, SETVAL, 1) == -1)
	{
		print_log("semctl(SETVAL) failed");
		shmctl(shmid, IPC_RMID, 0);
		semctl(semid, IPC_RMID, 0);
		exit(EXIT_FAILURE);
	}

	shm = shmat(shmid, (void *)0, 0);
	if(shm == (void *)-1)
	{
		print_log("shmat failed");
		exit(EXIT_FAILURE);
	}
    sleep(1);
	print_log("Shared Memory Attached");
	sh_ptr = (struct sh_dat *)shm;
	while(start) 				/* entering the loop */
	{
		/* Waiting while server reads the data written by the client */
		if(semaphore_p(semid))	/* Check if server has written the data */
		{
            // Black[30], Red[31], Green[32], Yellow[33], Blue[34], Purple[35], Cyan[36], White[37]
            mycolor(genRandoms(30, 37));
			printf("Enter some text: ");
            colorreset();
			print_log("Enter some text: ");
			fgets(buffer, TEXT_SZ, stdin);
		
			strncpy(sh_ptr->text, buffer, TEXT_SZ);
			print_log("User has type the message:");
			semaphore_v(semid);	/* Giving the memory to the server for reading */
			sleep(1);
			if(strncmp(sh_ptr->text, "end",3) == 0)
			{
				start = 0;		/* Stopping the program */
			    fprintf(fptr, " [%s] [%s] [%s] [%d] User has type the message: %s", timestamp(), __FILE__, __func__, __LINE__, sh_ptr->text);
			}
		}
	}
	if(shmdt(sh_ptr) == -1)
	{
		print_log("shmdt failed");
		exit(EXIT_FAILURE);
	}
	print_log("Shared Memory Detached");
	exit(EXIT_SUCCESS);
    fclose(fptr);
}

