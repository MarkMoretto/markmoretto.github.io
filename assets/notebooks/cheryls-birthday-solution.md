### When is Cheryl's Birthday?

**Note**: A better "overview" can be found in [this](https://github.com/norvig/pytudes/blob/master/ipynb/Cheryl.ipynb) notebook.

[This](https://www.cnn.com/2015/04/15/living/feat-cheryl-birthday-math-problem-goes-viral/index.html) puzzle has been around since 2015.  I came across it the other day (in 2020) and decided to try and create a solution.

Briefly, the puzzle states:


>Albert and Bernard became friends with Cheryl, and want to know when her birthday is. Cheryl gave them a list of 10 possible dates:


| May | June | July | August |
|:---:|:---:|:---:|:---:|
|  |  | 14 | 14 |
| 15 |  |  | 15 |
| 16 |  | 16 |  |
|  | 17 |  | 17 |
|  | 18 |  |  |
| 19 |  |  |  |

>Cheryl then tells Albert and Bernard separately the month and the day of the birthday respectively.
>Albert: "I don't know when Cheryl's birthday is, and I know that Bernard does not know."
>Bernard: "At first I don't know when Cheryl's birthday is, but I know now."
>Albert: "Then I also know when Cheryl's birthday is."
>So when is Cheryl's birthday?


Without further ado, here's our BirthdayFinder class.


```python
class BirthdayFinder:
    """
    BirthdayFinder class

    Argument:
        kwargs: key-value map of months and days.
                Both keys (months) and values (days) should be in
                string format.

    Example argument:
        bd_hints = {
              'may': ['15', '16', '19'],
              'june': ['17', '18'],
              'july': ['14', '16'],
              'august': ['14', '15', '17'],
              }        

    Returns:
        Call <self>.run() and the date should print out.
        There will also be a variable called "result" that will house the month and day in a 
            dictionary collection
    """
    def __init__(self, **kwargs):
        self.calendar = kwargs # Setting kwargs
        self.months = list(self.calendar.keys())
        self.days = None
        self.day_counts = None
        self.dpm = None # Days per month
        self.flatten_values() # Sets self.days
        self.update_day_counts() # Sets self.day_counts
        self.result  = None # Will be a dictionary of month and day.

    def __repr__(self):
        mth_str = ", ".join(self.months[:-1]) + f", and {xyz[-1]}"
        return f"<{self.__class__.__name__} for the months of {mth_str}>"

    def days_per_month(self):
        """Find the length of each month's "daus" list."""
        self.dpm = {k:len(v) for k, v in self.calendar.items()}


    def flatten_values(self):
        """Put all the day numbers into a list."""
        self.days = [i for j in self.calendar.values() for i in j]


    def update_day_counts(self):
        """
        Get the frequency count for each day number in our flattened list.
        Populates self.day_counts variable on running.
        """
        self.flatten_values()
        tmp_ = dict()
        for v in self.days:
            if not v in tmp_.keys():
                tmp_[v] = 1
            else:
                tmp_[v] += 1
        self.day_counts = dict(sorted(tmp_.items()))


    def delete_singles(self):
        """Delete months that contain single days."""

        # Update remaining days and day counts
        self.update_day_counts()
        
        # List to hold months that we're going to remove
        # We'll take this method to avoid a key deletion error.
        del_months = list()

        for dy, ct in self.day_counts.items():
            for mth in self.months:
                if ct == 1:
                    if dy in self.calendar[mth]:
                        del_months.append(mth)
        
        for mth in del_months:
            del self.calendar[mth]
            # is_deleted.append(self.calendar.pop(mth, None))



    def delete_duplicate_days(self):
        """Delete duplicate days based on all remaining days."""

        # Create "worker" list
        multi_days = []

        # Update remaining days and day counts
        self.update_day_counts()

        # Populate worker list with days that have a count above 1.
        multi_days[:] = [day for day, ct in self.day_counts.items() if ct > 1]

        # Iterate over our calendar of dates, check to see if a day
        # is in out newly-created list, remove it if so.
        for mth, days in self.calendar.items():
            for d in multi_days:
                days.remove(d)


    def get_solution(self):
        """
        Determine the month with a single day and set our result dictionary to 
        their respective values.
        """
        # Set self.dpm variable
        self.days_per_month()
        
        # Create empty result dictionary.
        self.result = dict(month="", day="")
        
        # Run through our days-per-month variable and find a length of 1.
        # Update the result dictionary with month and day.
        for m, ct in self.dpm.items():
            if ct == 1:
                self.result["month"] = m
                self.result["day"] = self.calendar[m][0]

    def run(self):
        """Run it all and print the result."""
        self.delete_singles()
        self.delete_duplicate_days()
        self.get_solution()

        if len(self.result) > 0:
            mth = self.result["month"]
            day = self.result["day"]
            print(f"Cheryl's birthday is: {mth} {day}")
```

We can create our sample "caldendar" and instantiate a BirthdayFinder class with the given calendar.


```python
dd = {
      'may': ['15', '16', '19'],
      'june': ['17', '18'],
      'july': ['14', '16'],
      'august': ['14', '15', '17'],
      }

bf = BirthdayFinder(**dd)
```

Print the calendar to check.


```python
bf.calendar
```




    {'may': ['15', '16', '19'],
     'june': ['17', '18'],
     'july': ['14', '16'],
     'august': ['14', '15', '17']}



Print our initial list of days (unordered).


```python
bf.days
```




    ['15', '16', '19', '17', '18', '14', '16', '14', '15', '17']



Finally, run the class and see if we get the expected solution.

In this case, the solution should be July 16.


```python
bf.run()
```

    Cheryl's birthday is: july 16
    
