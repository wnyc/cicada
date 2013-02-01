from django.test.testcases import TestCase
import json

class RetrievalTests(TestCase):
    
    def test_post_and_retrieve_latest(self):
        post_dict = {
                     "temp":65.4, 
                     "7000":7540.6,
                     "4000":5914.5,
                     "2500":2421.9,
                         }
        
        self.client.post('/readings/listen/', post_dict)
        
        response = self.client.get('/readings/retrieve_latest/')
        
        json_dict = json.loads(response.content)
        self.assertEqual(65.4, json_dict['temp'])