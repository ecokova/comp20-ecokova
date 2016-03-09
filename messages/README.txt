Elena Cokova

The webpage is able to successfully load json data from a file when hosted
on a local server. The messages loaded are formatted to resemble chat messages.

Loading json from a local file without the python server running does not
work, as it should not since it is not on the same origin. Similarly,
loading json from the heroku site also does not work because it is not on 
the same origin and would violate the same origin policy.

I discussed the assignment with Jeremy Colebrook-Soucie.

Hours spent: roughly 0.5
