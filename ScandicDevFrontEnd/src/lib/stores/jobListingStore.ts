import { writable } from 'svelte/store';
import type { Job } from '$lib/types/Job';

export const jobList = writable<Job[]>([]);
export const jobListLoading = writable<boolean>(false);
export const jobListError = writable<string | null>(null);
const API_BASE_URL = 'https://localhost:7077'; // Adjust port if needed

export async function fetchJobs() {
    jobListLoading.set(true);
    jobListError.set(null);

    try {
        const response = await fetch(API_BASE_URL + '/api/JobListings');
        if (!response.ok) {
            throw new Error(`Error fetching jobs: ${response.statusText}`);
        }
        const data: Job[] = await response.json();
        jobList.set(data); // ✅ Updates store with fetched jobs
    } catch (err) {
        jobListError.set(err instanceof Error ? err.message : "Unknown error");
    } finally {
        jobListLoading.set(false);
    }
}